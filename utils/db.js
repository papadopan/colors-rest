import mongoose from 'mongoose'
export const connect = () => {
  const url = "mongodb+srv://color:color@cluster0.y7kn4.mongodb.net/color?retryWrites=true&w=majority"
  return mongoose.connect(
    url,
    {  useNewUrlParser: true }
  )
}