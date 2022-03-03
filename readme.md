# Lesson 02 Class Activity Starting Code

This code begins where we left off with the lesson 01 personal assignment.

The purpose of this activity is to give students experience working with MongoDB because they will need to know how to do this for their personal assignments

## Steps to Complete

- The starter code is a sample solution of the lesson 1 assignment
- Run npm install then npm start to run the application
- Navigate to Mongodb.com and create a new database if you don't have one
- Connect using MongoDB Compass, ensure it is installed, and you can connect using your username and password
- Create a collection called user and add one user that has a single field called username and a value.
- Create a folder in the root of your project called db
- Create a file in db/ called connect.js that follows the implementation of the mongodb.js file posted by SuleymanSah
- We don't want to store sensitive database information in a JavaScript file directly
- You will move your sensitive db info to an environment variable file which will not go to GitHub or ever be published. You can get help setting this up with [this article](https://medium.com/@Hybeecodes/using-environment-variables-in-your-node-project-66f284cd9fe6)
- Create a route that will retrieve your user from the db
- Test the route using Rest Client
