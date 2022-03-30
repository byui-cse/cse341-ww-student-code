# CSE341 Lesson 7 Class Start

This repository contains a collection of code for students that take the CSE 341 course at Brigham Young University - Idaho.

## Steps to complete activity
- Start here: https://auth0.com/docs/ and follow the docs for backend node.js api

### Detailed steps to complete activity
- npm init -y
- npm install express express-openid-connect dotenv
- create .env
- Sign up for free auth0 account
- Create application in auth0
    - Click Settings
        - "Allowed Callback URLS" http:localhost:3000/callback
        - "Allowed Logout URLS" http:localhost:3000
        - scroll to bottom and save
- Create server.js file in node project
- Create express app and listen on a port
- use dotenv to grab values from env file
    - ISSUER_BASE_URL - domain
    - CLIENT_ID - client id
    - BASE_URL - http://localhost:3000
    - SECRET - any string 32 characters or more
- Copy app.use auth() from docs
- Check localhost:3000/login - you should be able to login
- Create route for homepage "/"
- res.send(req.oidc.isAuthenticated() ? 'Logged in : 'Logged out')
- Add authRequired:false to auth({})
- Add auth0Logout:true to auth({})
- Create route for '/profile' to test middleware
## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L07-class-complete)
