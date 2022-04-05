const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Book Box',
      description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)