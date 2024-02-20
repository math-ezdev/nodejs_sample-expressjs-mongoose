# ExpressJS - MongoDB using mongoose


# NodeJS vs ExpressJS
```
- NodeJS: a platform
- ExpressJS: framework based on NodeJS
```


# Instruction
- [Get started](#get-started)
- [URL components](#url-components)
- [HTTP Request - HTTP Methods](#http-request)
- [HTTP Response - HTTP Status Codes](#http-response)
- [Architecture (Folder Structure)](#architecture-folder-structure)


## Get Started
```
# Installing
- node -v
- npm init [-y]
- entry point: index.js
- npm i express
```
> [!TIP]
> entry point: should be renamed 'app.js'

```
# Hello World
- running locally: node app.js
- http://localhost:3000/
```

```
# Express application Generator
- npm i express-generator
- npx express-generator
- generate direction structure
```

```
# Routing
- route definition
- app.METHOD(PATH, HANDLER)
```

```
# Serving static file
- serve such as images, CSS files, JS files
- use express.static built-in middleware function
- express.static(root, [options])
```

```
# Dependencies
- express
- mongoose
- dotenv
- nodemon
```
> [!TIP]
> should start server using: npm run [scripts]


# URL Components
```
# https://   google.com   /search   ?q=android
- scheme
- domain-host
- path-endpoint
- query-params
```


# HTTP Request
```
# HTTP Methods
- GET
- POST
- PUT
- PATCH
- DELETE
```


# HTTP Response
```
# HTTP Status Codes
- 200-299: Success
- 400-499: Client Errors
- 500-599: Server Errors
```



# Architecture (Folder Structure)
```
- models
- views
- controllers
- routes

- middlewares
- helpers
- config
```

```
# Error Handler...
```


# Source
[`Get started`](https://expressjs.com/en/starter/installing.html)
[`Express application Generator`](https://expressjs.com/en/starter/generator.html)
[`HTTP/REST`](https://youtu.be/uRwQKikomtE?si=HmWlPRAPF505JPeK)
[`REST API tutorials`](https://youtube.com/playlist?list=PLw0w5s5b9NK5vec1mvOh5grtNlCwcgO0j&si=A2lEq2nicjaJzFfz)
[`API: json-server`](https://github.com/typicode/json-server)
[`API: mockapi`](https://mockapi.io/projects)