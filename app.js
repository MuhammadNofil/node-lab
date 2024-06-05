// importing mongoose for database connection
const mongoose = require('mongoose')
// importing express 
const express = require('express')

// import the model 
const Product = require('./model/product')

// inititalizing the backend app
const app = express()

// to serve pages
app.set("view engine", "ejs");

// functionm for db connection
const dbConnection = async () => {
    // try catch for exception handling
    try {
        // using await to handle the task async 
        //use your connection string here 
        await mongoose.connect('mongodb+srv://nofilsaleem:UMYqlY0gVDTlX22U@cluster0.r6mmshd.mongodb.net/sara')
        console.log('database connected')
    } catch (error) {
        throw new Error(error)
    }
}



// inititalizng the server

app.listen(4000, () => {
    console.log('server is listening on port 4000')
    // calling the db function
    dbConnection()
})

// this function is used ro render pages from server we used ejs which is a template engine use to make pages on server side
// go to browser hit localhost:3000 this route will open the ejs page
// just like in the mock test you were asked to serve the page at /contact you jyst need to add contact or whatever asked after / now your route will be localhost:3000/contact
// app.get("/contact", function (req, res) {
//     //here example is the name of the file present inside views folder
//     res.render("example");
// });
app.get("/", function (req, res) {
    //here example is the name of the file present inside views folder
    res.render("example");
});


// these routes are for crud operations
// route = localhost:3000/api/getAll
// req get
// this will send all the product data
app.get('/api/getAll', async (req, res) => {
    try {
        // exapme of mongose databse call this will return all the product data from the product schema 
        const data = await Product.find()
        res.statusCode(200).send({ data })
    } catch (error) {
        res.statusCode(500).send({ error })
    }
})

// get api
// this will return a single product based on the id
app.get('/api/getSingle', async (req, res) => {
    try {
        // every route will have two default params req res in the body you will recieve the producis from the frontend developer
        const { productId } = req.body
        // exapme of mongose databse call this will return all the product data from the product schema 
        const data = await Product.findOne({ _id: productId })
        res.statusCode(200).send({ data })
    } catch (error) {
        res.statusCode(500).send({ error })
    }
})

// post req this will create product
app.post('/api/create', async (req, res) => {
    try {
        const { name, color } = req.body

        // exapme of mongose databse call this will return all the product data from the product schema 
        const data = await Product.create({ name, color })
        res.statusCode(200).send({ data })
    } catch (error) {
        res.statusCode(500).send({ error })
    }
})







// mongoose is a orm which means object relational model that communicates with th db through objects 