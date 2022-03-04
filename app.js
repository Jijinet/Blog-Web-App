  
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');
var articlesRouter=require('./routes/articles');
var tagsRouter=require('./routes/tags');
var commentsRouter=require('./routes/comments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

routes() {
    app.use(paths.auth, require("../routes/auth"));
    app.use(paths.homepage, require("../routes/homepage"));
    // Catch all requests that don't match any route
    app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../client/build/index.html")
      );
    });
  }


app.use('/', indexRouter);

app.use('/api', apiRouter);

app.use('/users', usersRouter);
app.use('/users/:id', usersRouter);

app.use('/articles',articlesRouter);
app.use('/articles/:id', articlesRouter);

app.use('/tags',tagsRouter);
app.use('/tags/:id', tagsRouter);

app.use('/comments',commentsRouter);
app.use('/comments/:id', commentsRouter);

module.exports = app;