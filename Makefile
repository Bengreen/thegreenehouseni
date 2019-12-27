
NAME=example-fe

GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
GIT_HASH=$(shell git rev-parse --short HEAD)
GIT_DESCRIBE_MIN=$(shell git describe --tags --exclude "*/*" --abbrev=0 2>/dev/null || echo "0.0.0")

BUILDIMAGE=$(NAME)-build
DEVBUILDIMAGE=$(NAME)-devbuild

ng=node_modules/.bin/ng

guard-%:
	@ if [ "${${*}}" = "" ]; then \
	    echo "Environment variable $* not set"; \
	    exit 1; \
	fi

define STATUS
NAME:               $(NAME)
BUILDIMAGE:         $(BUILDIMAGE)
GIT_BRANCH:         $(GIT_BRANCH)
GIT_HASH:           $(GIT_HASH)
GIT_DESCRIBE_MIN:   $(GIT_DESCRIBE_MIN)
endef

MOUNTS=--mount type=bind,src=${CURDIR}/src,dst=/app/src --mount type=bind,src=${CURDIR}/e2e,dst=/app/e2e --mount type=bind,src=${CURDIR}/proxy.conf.js,dst=/app/proxy.conf.js


status:
	$(info $(STATUS))

clean:
	rm -rf node_modules

install: ${ng}

${ng}:
	npm install

dev: ${ng}
	${ng} serve

docker: Dockerfile
	docker build -t $(BUILDIMAGE) .

docker-shell: docker
	docker run -it $(BUILDIMAGE) /bin/bash

docker-dev: Dockerfile
	docker build --target dev -t $(DEVBUILDIMAGE) .

docker-dev-run: $(if $(NOBUILD),,docker-dev)
	$(info $(NAME) application and tests is shared into docker environment)
	docker container rm $(DEVBUILDIMAGE) || true
	docker run -it -p 4200:4200 $(MOUNTS) --name $(DEVBUILDIMAGE) $(DEVBUILDIMAGE) tmux -v new-session -s @angular -d "npm run test" \; split-window -l10 'npm run hmr' \; attach \; set -g pane-border-status top \; set -g pane-border-format "#{pane_index}/#T"

docker-dev-shell: $(if $(NOBUILD),,docker-dev)
	$(info $(NAME) application and tests is shared into docker environment)
	docker container rm $(DEVBUILDIMAGE) || true
	$(info consider to run : tmux new-session -d -s ng-test-session 'ng test';tmux split-window;tmux send 'ng serve' ENTER;tmux a)
	docker run -it -p 4200:4200 $(MOUNTS) --name $(DEVBUILDIMAGE) $(DEVBUILDIMAGE) bash
