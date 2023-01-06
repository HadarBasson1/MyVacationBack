const dotenv = require('dotenv').config()
const express = require("express");
const app = express();
const mongoose=require('mongoose')
mongoose.set('strictQuery', false);
const bodyParser=require('body-parser')
const PORT=process.env.PORT
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

app.use(bodyParser.urlencoded({extended:true,limit:'1m'}))
app.use(bodyParser.json())
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>{console.log('db connected!')})

const indexRouter = require('./routes/index')
app.use('/',indexRouter)

const flightRouter= require('./routes/flight_routes')
app.use('/flight',flightRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port:` + PORT);
});