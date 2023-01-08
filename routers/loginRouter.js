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
    }else console.log('connected to db from login')
})





//alow us to req.body (middleware)
router.use(express.urlencoded({extended : true}))


let popup=false;

// login routing
router.get('/join/login',(req,res)=>{
    console.log('we are in the login form!')
    res.render('login',{popup:popup})
})

let userId
router.post('/join/login', (req,res)=>{
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`
    ,(err,result)=>{
        if(result.length>0){
            if(result[0].email=='abdulrahman@gmail.com'){
                console.log('this is admin')
                res.redirect('../admin/')
            }else{
        console.log(result[0].ID)
        userId=result[0].ID
        res.redirect('../')
            }
        }else{
            popup=true
            console.log('incorrect email or password, try again')
            res.render('login',{popup: popup})
            popup=false
        }
    })
})


// registeration routing
router.get('/join/register' , (req,res)=>{
    console.log('we are in the registeration form!')
    res.render('register',{popup:popup})
})

router.post('/join/register' , (req,res)=>{
    let name= req.body.name
    let email= req.body.email
    let address= req.body.address
    let phone= req.body.phone
    let password= req.body.password
    db.query(
        `INSERT INTO users(name, email, address, phone, password) VALUES ('${name}','${email}','${address}','${phone}','${password}')`
        ,(err,result)=>{
            if (err){
            console.log('this email is already used, try another one')
            popup=true
            res.render('register',{popup:popup})
            popup=false
            }else {
            console.log(req.body)
            res.redirect('./login')
            }
        })
    })

    let storeItems
    router.get('/store',(req,res)=>{
        console.log('we are in Store!')
        console.log(userId)
        let query=`SELECT * FROM store ORDER BY ID ASC`
        db.query(query,(err,result)=>{
            // console.log(result)
            storeItems=result;
        })
    
        //show cart items
        db.query(`SELECT * FROM cart WHERE user_id = ${userId}`,(err,result)=>{
            if(err){
                console.log(err)
            }else {
                // console.log(result)
                
        res.render('store',{products: storeItems, cartItems:result, userID:userId})
            }
        })
    })
    
    // add item to cart
    
    router.get('/store/addItem/:product_name/:price/:image',(req,res)=>{
        console.log('item added to cart')
        db.query(`INSERT INTO cart (product_name, price, image, user_id) values('${req.params.product_name}', ${Number(req.params.price)},'${req.params.image}', ${userId})`
        ,(err,result)=>{
            if(err){
                console.log(err)
            }else {
                // console.log(result[0])
                // console.log(req.params)
                res.redirect('/store/')
            }
            
        })
    })


module.exports=router
