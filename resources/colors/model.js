import mongoose from 'mongoose'

const {Schema, model}= mongoose


const colorSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  hex: {
    type: String,
    required:true
  }
}, {timestamps:true})

export const Color = model('color', colorSchema)