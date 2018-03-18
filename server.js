const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let currentBook = '';
let users = [];


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
  })
  
});

app.put('/api/subscribe', (req, res) => {
  req && this.users.push(req);
  res.send(true);
});

app.post('/api/unsubscribe', (req, res) => {

  res.send(item);
});

app.delete('/api/delete', (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))