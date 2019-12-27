#############
### build ###
#############

# base image
FROM node:12.10.0 as base

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g @angular/cli@latest
# @8.3.7
COPY package.json /app/package.json
RUN npm install

COPY . /app


FROM base as dev
RUN apt-get install -y tmux locales-all less vim
ENTRYPOINT [ "./entrypoint-dev.sh" ]
EXPOSE 4200

############
### prod ###
############
FROM base as build
# run tests
RUN ng test --watch=false
RUN ng e2e --port 4202

# generate build
RUN ng build --prod --output-path=dist


# base image
FROM nginx:1.16.1-alpine as release

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
