const express = require('express');
const path = require('path');
const models = require('./models');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const app = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
const env = nunjucks.configure('views', { noCache: true });
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next)=> {
  res.render('index');
});

app.use((req, res, next)=> {
  const error = new Error('page not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next)=> {
  res.status(err.status || 500).render('error', { error: err });
});

const port = process.env.PORT || 3000;
models.sync()
  .then(()=> {
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`);
    });
  });
