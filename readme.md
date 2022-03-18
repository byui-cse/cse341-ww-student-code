# Lesson 12 Class Activity Starting Code

The purpose of this activity is to help students practice writing tests for their Node.js projects. This activity starts where the week11 solution left off.

## Steps to Complete
### Setup

- Install jest's mongodb library with ```npm install --save-dev @shelf/jest-mongodb```. This will let you write tests for connecting to MongoDb
- Add the following to your package.json:
```
"jest": {
    "preset": "@shelf/jest-mongodb"
  }
  ```

### MongoDb Tests
- The Jest documentation has an example of working with MongoDb: [https://jestjs.io/docs/mongodb](https://jestjs.io/docs/mongodb)
- Write a test for inserting a user into MongoDb
- Write a test for deleting a user from MongoDb
- When you are finished, compare your solution with the mongo.spec.js file in the sample solution.

### Stretch: Come Up With Your Own
- Think about what other kinds of things you could test
- Try adding some more routes to the project and writing tests for those as well