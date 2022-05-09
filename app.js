const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

//app.use(express.static('static',options))

app.use('/static',express.static('static'))
app.use( express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res) =>{
    const params = { }
    res.status(200).render('index.pug', params);
}  )

app.listen(port, () =>{
consol.log(`The application started successfully on port ${port}`);
})

