const express=require('express')
const loginRouter=require('./routers/loginRouter')
const adminRouter=require('./routers/adminRouter')
const storeRouter=require('./routers/storeRouter')
const app= express()



app.use('/',loginRouter)
app.use('/admin',adminRouter)
app.use('/store',storeRouter)
app.set('view engine','ejs')
app.use(express.static(__dirname+'/'))


app.get('/',(req,res)=>{
    console.log('main page')
    res.render('index.ejs',{currentUrl : req.url})
})

app.get('/muscles',(req,res)=>{
    res.render('muscles', {currentUrl: req.url})
    console.log(req.url)
})

app.get('/fat', (req,res)=>{
    res.render('fat', {currentUrl: req.url})
    console.log(req.url)
})

app.get('/nutrition1', (req,res)=>{
    res.render('nutrition1', {currentUrl: req.url})
    console.log(req.url)
})

app.get('/nutrition2', (req,res)=>{
    res.render('nutrition2', {currentUrl: req.url})
    console.log(req.url)
})


app.listen(3000,()=>{
    console.log('listening to port 3000! ')
})