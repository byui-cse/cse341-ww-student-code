# CSE341 Lesson 4 Class Activity

## Steps to complete activity

### Populate Database

- Create a collection in your mongodb database called "books"
- Import the book.json into this collection. You won't use the book.json file for anything else in this activity.

### swagger-autogen

- Clone this repository onto your computer
- Run `npm install` to install the dependencies
- Create a new database in your MongoDB account
- Add a .env file and assign your mongodb url to the variable `MONGODB_URI` ...(ensure that your uri is connecting to the correct database in MongoDB).
- Install swagger-autogen to the project with `npm install --save swagger-autogen`
- If you wish, add a swagger-autogen script to your package.json to run `node ./swagger.js`
- Create a swagger.js file. Following the swagger-autogen documentation, add a constant for the document, output file, and an array of endpoints. (Hint: since this project uses express router, the only thing you'll need in the endpoint array is a path to the server.js file. )
- Run your swagger script: `npm run swagger-autogen`. You'll know it worked when the output json file appears populated with the project routes.

### swagger-ui-express

- The next steps will give you a place to see your API documentation.
- Install swagger-ui-express with `npm install --save swagger-ui-express`
- Import swaggerUi and your swagger json document at the top of the server.js file.
- Follow the swagger-ui-express documentation to set up a route for the api docs. Put this in the server.js file after the other routes.
- That's it! Start your server and navigate to localhost:3000/api-docs to see your working swagger documenation.

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L04-class-complete)
