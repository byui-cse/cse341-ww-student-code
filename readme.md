# CSE341 Lesson 5 Class Activity

## Steps to complete activity

- Create a GitHub repository.
- Clone it on your computer and open it in VS Code
- Run npm init to start a new node project
- Create a simple server.js file like we've done previously
- In your same MongoDB account, create a new database
- Create an .env file with your MONGODB_URI
- Connect to MongoDB in your node project
- Create a Swagger.json that contains a single API route that represents the following GET request:  
  [https://localhost:8080?name=sarah](https://localhost:8080?name=sarah). This is just to give you practice designing a swagger api route without generating one from existing code. This will not connect to the database, and will consist of a very simple node api route.
- Add the swagger route to your node project routes, and test it locally.
- Push to GitHub
- Create a new Heroku project, and connect it to your GitHub repository
- Set up automatic deploys from your default branch (or another of your choice).
- Modify the swagger.json to reference your heroku url instead of localhost and to use https instead of http.
- Commit and push this change
- Test on Heroku until it all works.

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L05-class-complete)
