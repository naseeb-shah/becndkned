// const { json } = require('express')
const { request } = require('express')
var dotenv = require('dotenv')
var bodyParser = require('body-parser')
const product = require('./model')
const user=require('./useermodel')
dotenv.config({ path: './.env' });
var url = process.env.URL
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(url, (err) => {
    if (err)
       console.log(err)
    else
       console.log("monodogdbconcnd")
})


const app = express()
app.use(bodyParser.json())
// app.use(json)
//res.send(product)

app.get('/products', (req, res) => {
    product.find((err,data)=>{
        if(err)
        res.send(err)
        else
        res.send(data)
    })

})
app.post('/products/create', (req, res) => {

  const  name=req.body.name
  const  price=req.body.price
    var addproduct = new product({
        name: name,
        price: price,

    })
    addproduct.save((err, data) => {
        if (err)
           res.send(err)
        else if (data)
           res.send("adde")
        else
           res.send("Something went wrong")
    })

    // res.send("Proudct is  added")
}
// 



)
app.patch('/proudcts/:id', (req, res) => {
    var id = req.params.id
    const  data=req.body
    console.log('data')
    // const  price=req.body.price

//    res.send(req.body)
product.findByIdAndUpdate(id,data,(err,dat)=>{
    if(err)
    res.send(err)
    else
    res.send("updated")
})



    
})


app.delete('/products/:id', (req, res) => {
    var id = req.params.id
console.log(id)
product.findOneAndDelete({'_id':id}, (err,data)=>{
    console.log(data)
    if(err)
    res.send(err)
    else
    res.send( id,"Product  is  deleted")
})


})


// --------------------------------------------
app.get('/user', (req, res)=>{
    var query=req.body
    user.find(query,(err,data)=>{
        if(err)
        res.send(err)
        else
        res.send(data)
    })
    
})

app.listen(1000,()=>{
    console.log('serveris consort')
})
