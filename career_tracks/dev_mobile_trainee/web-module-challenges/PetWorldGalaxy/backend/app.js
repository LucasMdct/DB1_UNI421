const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');

const app = express();

app.use(cors({
  origin: 'http://uni421.medeirosdev.cloud/PWG/contact.html',
  methods: ['POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Configura o CORS para permitir requests quando o backend
// está rodando em um endereço diferente do frontend
// Docs: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
//app.use(cors({
//  origin: [
    // Libera o servidor na núvem
//    /.*.medeirosdev.cloud$/,
    // Libera acesso local
//    /http:\/\/(localhost|127.0.0.1)(:\d+){0,1}$/,
//  ],
//  maxAge: 3600,
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/data', dataRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if (process.env.NODE_ENV !== 'production') {
    res.json(err);
  } else {
    res.send();
  }
});

module.exports = app;