const express = require('express');
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();

const mongoose = require('mongoose');
const Contact = require('./contact');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const port = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// establish a connection to the mongo database
mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true }, (err, res) => {
     if (err) {
        console.log('Connection failed: ' + err);
     }
     else {
        console.log('Connected to database!');
     }
  }
);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


app.get('/contacts', requiresAuth(), (req, res) => {
  console.log(req)
  Contact.find()
  .then(contacts => {
    res.status(200).json(contacts)
  }).catch(err => {
    res.status(500).json({ message: 'An error occured', error: err })
  })
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
