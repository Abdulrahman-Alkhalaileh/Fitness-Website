const express=require('express')
const router=express.Router()
const mysql= require('mysql')
const path = require('path');


//connect to MineFitness database
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'minefitness'
})

db.connect((err)=>{
    if(err) {
        throw err
    }else
     console.log('connected to db from admin')
})

//alow us to req.body (middleware)
router.use(express.urlencoded({ extended: true }));
// express.static(path.join(__dirname, '/admin'));

let usersResult
//LOAD INFORMATION FROM DATABASE TO ADMIN'S INTERFACE
router.get('/', (req,res)=>{
 console.log('we are in admin')
 let query = `SELECT * FROM users ORDER BY ID ASC`
 db.query(query,(err,result)=>{
    if(err){
        console.log('something went wrong with users table')
        res.send('something went wrong with users table')
    }else {
        // console.log(result)
        usersResult=result;
        // console.log( usersResult)
    }
 })

 let StoreQuery=`SELECT * FROM store`
 db.query(StoreQuery,(err,result)=>{
    if(err){
        console.log('something went wrong with store table')
        res.send('something went wrong in store table')
    }else{
        // console.log(result)
        // res.render('admin',{result:result})
        res.render('admin',{storeResult:result,usersResult:usersResult})
        
    }
 })
})


//delete user
router.get('/delete/:ID',(req,res)=>{
    console.log('we are in delete part')
    let query=`DELETE FROM users WHERE ID = ${req.params.ID}`
    db.query(query,(err,result)=>{
        if(err){
            console.log('deletion didnt works')
        }else{
            // console.log(result)
            res.redirect('/admin/')
        }
    })
})


//add product from form
router.post('/',(req,res)=>{
    //get the current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    console.log('we are in add product part')
    let query=`INSERT INTO store (date, product_name, price, description, quantity, image) VALUES ('${today}','${req.body.product_name}','${req.body.price}','${req.body.description}','${req.body.quantity}','${req.body.image}')`
    db.query(query,(err,result)=>{
        if(err){
            console.log('error while insert to database')
        }else {
            console.log(result)
            res.redirect('/admin/#products')
        }
    })
})

//edit product
router.get('/editProduct/:ID/:product_name/:price/:description/:quantity/:image',(req,res)=>{
    console.log('edit product part')
    let query=`UPDATE store SET product_name='${req.params.product_name}',price='${req.params.price}',description='${req.params.description}',quantity='${req.params.quantity}',image='${req.params.image}' WHERE ID=${req.params.ID};`
    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(req.params)
            res.redirect('/admin/#products')
        }
    })
})

//delete Product
router.get('/deleteProduct/:ID',(req,res)=>{
    console.log('delete product part')
    let query=`DELETE FROM store WHERE ID = ${req.params.ID}`
    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            console.log('product deleted')
            res.redirect('/admin/')
        }
    })
})

module.exports=router