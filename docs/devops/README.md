# DevOps

## Overview

Deployment for Polaris is a fully featured, modern, production grade experience handled by [GitHub Actions]

## Deploy Polaris

An example deployment of Polaris to [GCP] is provided. For simplicity, we use a CD pipeline workflow which follows master branch changes and does an automatic deployment. There is a working examples of a CD pipeline in the `github/workflows` folder.

**Note:** CD workflow pipelines are expected to be adjusted or completely changed to fulfill project needs.
To adjust the pipeline see `github/workflows/integration.yml`

## Lint, Test and Build

Polaris includes a fully featured, production-ready CI pipeline. Polaris uses GitHub Actions as for continuous integration. The Polaris CI pipeline includes all of the steps needed to lint, test and build assets.

[gcp]: https://console.cloud.google.com
[github actions]: https://github.com/features/actions
