const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const articlesRoutes = require('./routes/articles');
const providersRoutes = require('./routes/providers');
const usersRoutes = require('./routes/auth');//USERS AUTH

mongoose.connect('mongodb://localhost/rest-api-ventaDeProductos', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('BD is connected'))
  .catch(err => console.log(err));


//settings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/articles', articlesRoutes);
app.use('/providers', providersRoutes);
app.use('/users', usersRoutes);

//static files


//error handlers


//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});