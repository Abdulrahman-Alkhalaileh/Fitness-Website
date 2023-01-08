const express=require('express')
const router=express.Router()
const mysql= require('mysql')


//Create db connection 
const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'minefitness'
})

db.connect((err)=>{
    if (err){
        throw err
    }else console.log('connected to db from store')
})


//allow us to req.body (middleware)
router.use(express.urlencoded({extended : true}))



//remove item from cart 

router.get('/removeItem/:id',(req,res)=>{
    db.query(`DELETE FROM cart WHERE ID = ${req.params.id}`,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            res.redirect('/store/')
            console.log('item removed')
        }
    })
})



module.exports=router;