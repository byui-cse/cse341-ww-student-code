# Lesson 8 Class Start

The code for this class activity will pick up where the lesson 7 class activity concluded.

## Steps to complete activity

#### Getting started with the code

- Download this code
- Run npm install
- Run npm start

#### Creating the request

- Create a simple GET request which will retrieve data from a MongoDB collection of your choice (Be sure to create an .env file for your MONGODB URI).

#### Swagger documentation and testing

- Create a Swagger.json file for this route. You may use [swagger-autogen](https://www.npmjs.com/package/swagger-autogen) if you wish.
- Create an "/api-docs" route like we've done before so that you can access the swagger ui. You may use [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) if you wish.
- Test the GET request with your swagger ui to ensure it works.

#### Incorporating OAuth

- Add the requiresAuth() middleware provided by Auth0 to the route you created previously.
- Make sure you are logged out. If you try testing your route with your Swagger UI now, it will not work.
- Go to /login again and log in like you did earlier. If you go back to /api-docs and test out your route, it will work!

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L08-class-complete)
