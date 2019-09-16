const mongoose = require('mongoose')

const Story = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  story:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('Story', Story)
