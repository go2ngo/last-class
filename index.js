const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Story = require('./models/story')

//midlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connect to database
mongoose.connect('mongodb+srv://crudUser:crudPass@cluster0-fdmkk.mongodb.net/stories?retryWrites=true', {useNewUrlParser: true,
useCreateIndex: true, useUnifiedTopology:true}, ()=>{
 console.log('Connected to the database');
})

app.post('/api/addStory', (req, res)=>{
  console.log(req.body);
  const {title, story} = req.body
  Story.create({title, story})
  .then(data=>res.json({message:'Story Added'}))
  .catch(err=>{
    console.log(err);
    res.json(err)
  })
})

app.get('/api/stories', (req, res)=>{
  Story.find()
  .sort('-_id')
  .then(data=>res.json(data))
  .catch(err=>{
    console.log(err);
    res.json(err)
  })
})

app.get('/api/story/:id', (req, res)=>{
  Story.find({_id:req.params.id})
  .then(data=>res.json(data))
  .catch(err=>{
    console.log(err);
    res.json(err)
  })
})


const PORT = 5000
app.listen(PORT, ()=>console.log(`This app is running on port ${PORT}`))
