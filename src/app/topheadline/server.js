// install express server 
const express = require ('express');

const path = require('path');

const app = express();

// serve only the  static files form the dist WatchDirectoryFlags 
// replace the './dist/<to-your-project'


app.use(express.static(__dirname + './dist/news-project with api'));

app.get('*', function(_req,res){
    res.sendFile(path.join(__dirname + './dist/news-project with api/index.html'));
    
});


app/listen(process.env.PORT || 8080 );