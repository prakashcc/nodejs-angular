var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://testproject:RT1cgfpm1sXt3UFF@cluster0-f9zgq.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected!");
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Max-Age', '365');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Cache-Control, Pragma,Access-Control-Allow-Origin, Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept, Authorization,CORELATION_ID');
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma,Access-Control-Allow-Origin, Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept, Authorization,CORELATION_ID");
    next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
