import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import colorRouter from './resources/colors/router.js'
import { connect } from './utils/db.js'


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))

// register router
app.use("/color", colorRouter)

export const start = async ()=>{
  try {
    await connect()
    app.listen(9000, ()=>console.log("Express server is listening to port 9000"))
  }catch(e){
    console.error(e)
  }
}