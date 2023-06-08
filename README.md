# Nest-app

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# INSTALL PACKAGES NODEJS/NPM
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).

## Youtube class

[Youtube class](https://www.youtube.com/watch?v=V0ye6gXFFj0&list=PLT2b3Y_zT4_9LK6Gtz_QbpfDcxH07xhG5&index=2).

## To use database in docker

```bash
# BUILD IMAGE
$ docker pull mongo
```

```bash
# RUN IMAGE
$ docker run --name mongodb -p 27017:27017 -d mongo
```

String de conexão será, o banco será criado automaticamente de acordo com o que for escrito no local de ```DATABASE-NAME```.

```bash
mongodb://localhost:27017/DATABASE-NAME
```