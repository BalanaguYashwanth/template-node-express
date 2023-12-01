require('dotenv').config()
const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const showdown = require('showdown')

const app = express()
const PORT = 5000
const convertor = new showdown.Converter({breaks: true})
convertor.setOption('simpleLineBreaks', true);
convertor.setOption('simplifiedAutoLink', true);

app.use(cors())

app.get('/', (req,res)=>{
    res.json({'status':'healthy'})
})

app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`)
})

