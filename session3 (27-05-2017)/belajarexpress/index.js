//Task 1
/*const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/home', function(req, res){
    res.end('Hello World!');
})
app.listen(port);*/

//Task 2
/*const express = require('express');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.use(express.static('public'));

app.listen(port);*/

//Task 3
/*const express = require('express');
const app = express();
const port = process.argv[2];
const viewPath = process.argv[3];

app.set('views', viewPath);
app.set('view engine', 'pug');
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
})
app.listen(port);*/

//Task 4
/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.argv[2];
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', 'view');
app.set('view engine', 'pug');

app.get('/form', function(req, res){
    res.render('index');
})
app.post('/form', function(req, res){
    res.send(req.body.str.split('').reverse().join(''));
})
app.listen(port);*/

//Task 5
/*const express = require('express');
const stylus = require('stylus');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.use(stylus.middleware(filename));
app.use(express.static(filename));

app.listen(port);*/
//nodemon index.js 3500 public

//Task 6
/*const express = require('express');
const crypto = require('crypto');
const app = express();
const port = process.argv[2];

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(port)*/

//Task 7
/*const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})

app.listen(port)*/

//Task 8
fs = require('fs');
const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})
app.listen(port);