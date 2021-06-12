# React ts template

The production ready template repository for react ts project

## Supported features

- ✅ static analysis(`eslint`, `prettier`)
- ✅ webpack
- ✅ typescript
- ✅ unit testing(`jest`, `@testing-library/react`)
- ✅ CI/CD pipeline
  - ✅ GAE + IAP for staging env
  - ✅ Firebase hosting for production env

## Setup

### GCP setup

- Enable `Cloud Build API` and `Identity Aware Proxy API`
- Add `Firebase Develop Admin`, `App Engine Admin`, `Service Account User` roles on cloud build service account

### Deploy the base container image

```
cd base_image
gcloud builds submit --project YOUR_PROJECT_ID
```

### Enable IAP

- Configure the OAuth consent screen on your project
- Enable IAP on your app engine resource(make sure to add the `IAP-secured web app user` role to tester accounts)

### Test the ci and cd workflow from your local

```
gcloud builds submit --config=cloudbuild.ci.yaml --project YOUR_PROJECT_ID
gcloud builds submit --config=cloudbuild.cd.stg.yaml --project YOUR_PROJECT_ID
gcloud builds submit --config=cloudbuild.cd.prod.yaml --project YOUR_PROJECT_ID
```

### Connect your repository

See [this guide](https://cloud.google.com/build/docs/automating-builds/create-github-app-triggers)

## Usage

- Start the dev server

```
yarn start
```

- Run the static analysis

```
yarn lint
```

- Run the test

```
yarn test
```

- Build for release

```
yarn build:stg
yarn build:prod
```

- Deploy

```
yarn deploy:stg --project YOUR_PROJECT_ID
yarn deploy:prod --project YOUR_PROJECT_ID
```
