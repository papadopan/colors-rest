import express from 'express';
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

export const start = async ()=>{
  try {
    app.listen(9000, ()=>console.log("Express server is listening to port 9000"))
  }catch(e){
    console.error(e)
  }
}