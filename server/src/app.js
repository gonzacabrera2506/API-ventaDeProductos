const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//const articlesRoutes = require('./routes/articles.routes');
//const providersRoutes = require('./routes/provider.routes');
const usersRoutes = require('./routes/auth.routes');//USERS AUTH
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('BD is connected'))
  .catch(err => console.log(err));


//settings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
//app.use('/articles', articlesRoutes);
//app.use('/providers', providersRoutes);
app.use('/users', usersRoutes);

//static files


//error handlers


//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});