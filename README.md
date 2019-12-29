# Thegreenehouseni

Building the project in dev mode.

    make docker-dev-run

this will create a nice enviornment inside docker to build your application and export your app in dev mode via localhost:4200

This environment can also be used to create the production build use the dev environment and run the prod-build inside the shell with 

    npm run build-prod

todo: make this run under a makefile command `build-prod`

# Sync to GCloud bucket

To sync to the gcloud bucket run the following commands from within the `dist` dir after building prod.

    gsutil -m rsync -r ./thegreenehouseni/ gs://www.thegreenehouseni.com/

