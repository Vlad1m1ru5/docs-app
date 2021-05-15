# Docs App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## System Requirements

* [Node.js v10.13](https://nodejs.org) or later
* [PostgreSQL 10](https://www.postgresql.org/download/) or later
* [Elasticsearch 7](https://www.elastic.co/downloads/elasticsearch)
* [ZomboDB 3000.0.0-alpha3](https://www.zombodb.com/services/) added to postgres extensions
* MacOS, Windows (including WSL), and Linux are supported

## Installation

First, install project:

* clone sources `git clone https://github.com/Vlad1m1ru5/docs-app.git`
* change into the checkout directory `cd docs-app`

Second, configure databases:

* make sure elasticsearch runs on port `9200`
* enter user `su - postgres`
* enter postgres cli `psql`
* create user password `\password postgres`
* create new user `CREATE USER marcus WITH PASSWORD 'marcus';`
* create new databse `CREATE DATABASE application OWNER marcus;`
* exit `\quit`
* execute database createion SQL script `sudo psql -U marcus -d application -a -f migration.sql`

> Note: The user that runs the above command will need write permissions to the Postgres `$PG_INSTALL_PATH/lib/postgresql/` and `$PG_INSTALL_PATH/share/postgresql/extension/` directories.

Third, install dependencis:

```bash
npm run install
# or
yarn install
```

## Configuration

Create file `.env.development`:

```bash
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=application
DB_USER=marcus
DB_PASSWORD=marcus
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
