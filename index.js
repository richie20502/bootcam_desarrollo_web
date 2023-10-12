const express = require('express');
const app = express();
const port = 3000;
app.get('/', function(req, res){
    res.send('bienenidos');
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
