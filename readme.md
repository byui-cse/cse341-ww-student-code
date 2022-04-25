# Lesson 02 Class Activity Starting Code

This code begins where we left off with the lesson 01 personal assignment.

The purpose of this activity is to give students experience working with MongoDB because they will need to know how to do this for their personal assignments

## Steps to Complete

- The starter code is a sample solution of the lesson 1 assignment
- Run npm install to install dependencies listed in package.json
- Run npm start to start the application. Keep the terminal open so you can see errors as you go through the following steps
- Navigate to Mongodb.com and create a new database if you don't have one
- Connect using MongoDB Compass, ensure it is installed, and you can connect using your username and password
- Create a collection called user and add one user that has a single field called username and a value.
- Create a folder in the root of your project called db
- Create a file in db/ called connect.js that follows the implementation of the mongodb.js file posted by [SuleymanSah](https://stackoverflow.com/questions/58354629/moving-nodejs-mongodb-connection-code-to-another-file#--stacks-s-tooltip-7h4ggrdh)

  - The one change that you'll have is just at the top of the file. You'll connect using your .env file MONGODB_URI like this:

    ```
      const dotenv = require('dotenv');
      dotenv.config();
      const MongoClient = require('mongodb').MongoClient;

      let _db;

      const initDb = (callback) => {

      ...
    ```

  - The rest of the file will be the same, declaring **initDB**, **getDB**, and exporting both of them.

- We don't want to store sensitive database information in a JavaScript file directly
- You will move your sensitive db info to an environment variable file which will not go to GitHub or ever be published. You can get help setting this up with [this article](https://medium.com/@Hybeecodes/using-environment-variables-in-your-node-project-66f284cd9fe6)
- Modify server.js to only listen() if mongodb connected successfully
- Create a route that will retrieve your user from the db
- Notice that the logic involved to create this mongodb request causes your route to become cluttered. Create a controllers folder with a file called user.js
- Create a function in the controller that will retrieve the user and return it as json when the route is requested
- Test the route using Rest Client
- Once this is working, create another route, and another controller function to only return the username of the user

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L02-class-complete)
