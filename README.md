## Birthday NodeJS Api

Simple NodeJS Birthday Api written in vanilla javascript, Express, MongoDB.

CRUD Operations with (name,birthday date) in MongoDB and RestFul API


## Get Started

### 1. Pre-requisites

- [NodeJs](https://nodejs.org/en/) - Server side environment
- [NPM](https://npmjs.org/) - Node manager package
- [Docker](https://www.docker.com/) - Docker and docker-compose installed
- (Optional) [Yarn](https://yarnpkg.com/lang/en/) - Node manager package alternative

- Run **testdb MongoDB instance present** in docker-compose file

### 2. API Backend

```
 $ cd server
 $ npm install || yarn
 $ npm run dev || yarn dev
```

- Access: http://localhost:5000


### 3. Using API


- Make Restful requests to the **/bithdays** API


- **GET** /birthdays/id - Get by ID
- **POST** /birthdays - Create new BDay entry
- **PUT** /birthdays/id - Updating existing BDay entry by Id
- **DELETE** /birthdays/id - Delete BDay entry by Id