# CSE341 Lesson 7 Class Activity

This code contains the starter Node.js backend template for the Lesson 7 class activity. You will build the backend to an application that already has an existing frontend using JWT for authentication.

## How to use this repository

Either clone, fork, or download the zip file to access the files on your computer.

Get your node project up and running with npm i and npm start. Be sure to leave it on port 8080 so that the frontend project will work without having to modify it.

## Steps to complete activity

- Download the [frontend code](https://github.com/byui-cse/cse341-code-student/tree/L07-class-frontend) onto your computer and open the index.html file with live server. You will not change any code in the frontend code.
- Download the backend starter template (this repository branch) onto your computer, open it, and familiarize yourself with it.
- Use this template to make a new node project with REST endpoints. You will use POST to send user login data and GET to grab all the data for the specific user.
- While you're writing your code, test it with REST Client in VS Code to ensure it is working correctly.
- run npm i
- Create a .env file and add ACCESS_TOKEN_SECRET variable of your choice
- In controller/login.js add the proper imports and create a postLogin export
- Grab the email from the body and sign it with the ACCESS_TOKEN_SECRET using jwt
- Send this signed accessToken as a response
- Add three users to the model/user.js file (check the frontend for json format)
- Make a request.rest file
- run npm start
- For more info on jwt visit https://jwt.io/introduction Start reading after “How do JSON Web Tokens work?” to learn more about Authorization: Bearer
- Once everything looks good with the REST Client, open the frontend webpage in the browser and check to see if it is working (ensure that your backend server is still running on port 8080).
- Clean up your REST Client .rest file and add comments for documentation for your backend.

## Solution
Here is the [completed code example](https://github.com/byui-cse/cse341-code-student/tree/L07-class-complete).
