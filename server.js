const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let currentBook = '';
let user = '';


function parseBook(file) {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {

        if (err) {
          reject(err)
        } else {
          this.currentBook = data;
          resolve(data)
        }
      })
    }) 
  } catch (e) {
    console.log(e);
  }
}


app.get('/api/book', (req, res) => {
  parseBook('20000Leagues.txt').then((data) => {
    res.send(data);
    console.log(this.user);
  })
  
});

app.post('/api/subscribe', (req, res) => {
  this.user = req.body.email;
  res.send({email: req.body.email});
  console.log(this.user);

});

app.put('/api/update', (req, res) => {
  this.user = req.body.email;
  res.send({email: req.body.email});
  console.log(this.user);

});

app.delete('/api/unsubscribe', (req, res) => {
  this.user = '';
  res.send({email: this.user});
  console.log(this.user);

});

app.listen(3000, () => console.log('Server listening on port 3000!'))