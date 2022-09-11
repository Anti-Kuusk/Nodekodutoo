const express = require("express");
const app = express();
let port = process.env.PORT || 5000;

app.get('/getRequest/:name', function(req,res){
    res.send('Hello, ' + ' ' + req.params.name)
    })
    

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
});