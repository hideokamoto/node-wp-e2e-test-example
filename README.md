# WordPress E2E test example

## Getting started

```bash
$ git clone git@github.com:hideokamoto/node-wp-e2e-test-example.git
$ cd node-wp-e2e-test-example
$ yarn
```

## Configure your WordPress

You can use your WordPress site to define the following environment variables.

- WP_USERNAME
- WP_PASSWORD
- WP_BASE_URL

```bash
$ mv .envrc.example .envrc
$ vim .envrc
export WP_USERNAME=admin
export WP_PASSWORD=password
export WP_BASE_URL=http://localhost:8889
$ direnv allow
```

## Run the test

```bash
$ yarn test
```