const express = require('express');
const app = express();
const cors = require('cors')

// Settings
app.set('port', 4000)

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended : false }))
app.use(express.json())


// Routes
app.use('/api/users', require('./routes/users')),
app.use('/api/notes', require('./routes/notes')),

module.exports = app;