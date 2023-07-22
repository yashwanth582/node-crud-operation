const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://0.0.0.0:27017/'
const app = express();
const cors = require('cors') 
const bodyParser = require('body-parser') 

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json())
const alineRouter = require('./routes/aliens')
app.use('/aliens', alineRouter)

app.listen(9000, ()=>{
    console.log('server started')
})