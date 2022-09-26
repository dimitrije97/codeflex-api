## Prerequisite:

- node
- nvm
- npm / yarn

## How to run application:

- Inside your favorite shell enter

```
$ nvm use
```

This command will trigger nvm to read node version recommended for this project (at least v16.13.0) defined in .nvmrc

- If nvm doesn't have v16.13.0 it will require one more step, if not skip this one

```
$ nvm install v16.13.0
$ nvm use
```

- Set up env

```
$ cp .env.dev.example .env.dev
```

### Run locally without docker

- Install all necessary dependencies

```
$ yarn
```

- Start database
- Use docker in order not to install postgres on your machine

- Firstly, install docker-compose following steps from: https://docs.docker.com/compose/install/
- Thereafter

```
$ cd .docker
$ cp .env.docker.dev.example .env.docker.dev
$ docker-compose -f docker-compose.dev.yml build
$ docker-compose -f docker-compose.dev.yml up codeflex-db-dev
```

- Run migrations

```
$ yarn migration:run
```

- Run application

```
$ yarn start
```

### Or if you prefer using docker follow the following steps

```
$ cd .docker
$ cp .env.docker.dev.example .env.docker.dev
$ docker-compose -f docker-compose.dev.yml build
$ docker-compose -f docker-compose.dev.yml up
```

- Run migrations

```
$ yarn migration:run
```

## NOTE

- Migrations should be run anyway (either you run app with or without docker)

# User:

```
email: user1@gmail.com
password: user1
```

## NOTE

- Dockerfile for production prepared

- Sensitive env variables:

```
SECRET=SuperCoolSecret!
GET_CURRENCIES_API_URL=https://api.currencyapi.com/v3/latest?apikey=U6KftrKeKM3WwQtcALpicscaF6Rlxlc7VLYxHX8z&currencies=RSD%2CUSD%2CAUD%2CGBP%2CJPY&base_currency=EUR
POSTGRES_PASSWORD=SuperCoolTest123!
```
