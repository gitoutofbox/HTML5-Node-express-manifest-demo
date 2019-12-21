const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('app'));

const server = app.listen(8082, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});


//chrome://appcache-internals/
app.get('/appcache', (req, res) =>{
    // res.setHeader('content-type', 'text/cache-manifest');
    // const content = fs.readFileSync('manifest.appcache', 'utf8');
    // //console.log(content)
    // res.end(content);
    res.end('');
})