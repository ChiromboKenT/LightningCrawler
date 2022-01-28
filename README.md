<h1 align="center">Welcome to Lightning Crawler 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ChiromboKenT/LightningCrawler#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ChiromboKenT/LightningCrawler/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ChiromboKenT/LightningCrawler/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/ChiromboKenT/Lightning Crawler" />
  </a>
</p>

> Scalable Web Crawler for internal website, built for Lightning Internal assessment

### 🏠 [Homepage](https://github.com/ChiromboKenT/LightningCrawler#readme)

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

# Node
- # Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- # Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.11.3

    $ npm --version
    6.1.0


## Install

```sh
 (cd crawler && npm install) & (cd client && npm install)
 
```
## Usage Locally

# Run Backend
  - Navigate to crawler folder 
```sh
  cd crawler && npm run dev
```

# Run Client
  - Navigate to client folder  *Make sure to be in Project root diretory LightningCrawler/
```sh
  cd client && npm start
```
# Open Application
  - Open application on <a href="http://127.0.0.1:3000/" target="_blank">http://localhost:3000/</a>

# Run concurrently with 
```sh
     (cd crawler npm run) & (cd client && npm start)
```

## Usage Docker

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```
# Open Application
  - Open application on <a href="http://127.0.0.1:80/" target="_blank">http://localhost:80/</a>

## Author

👤 **Kenny Chirombo**

* Github: [@ChiromboKenT](https://github.com/ChiromboKenT)
* LinkedIn: [@chirombokenny](https://linkedin.com/in/chirombokenny)


## 📝 License

Copyright © 2022 [Kenny Chirombo](https://github.com/ChiromboKenT).<br />
This project is [ISC](https://github.com/ChiromboKenT/LightningCrawler/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_