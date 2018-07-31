const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/:id', (req, res)=>{
    console.log(req.query);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    
    // res.send("getting root");
    res.status(404).send("Not Found");
})

app.get('/profile', (req,res)=>{
    res.send("getting profile");
    // res.send(user);
})

app.post('/profile', (req, res)=>{
    console.log(req.body);
    const user={
        name: 'Quyen',
        hobby: 'football',
    }
    res.send(user);
})

app.listen(3000);