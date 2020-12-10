const express=require('express')
const app= express()
const nav=[{link:'/books',name:'books'},
{link:'/authors',name:'authors'},
{link:'/login',name:'login'},
{link:'/signup',name:'signup'}]


const booksrouter=require('./src/routse/bookrouter')
const aurouter=require('./src/routse/routerauthor')
const signuprouter=require('./src/routse/signup')
const loginrouter=require('./src/routse/login')
const addbook=require('./src/routse/addbook')
const addauthor=require('./src/routse/addauthor')



app.use(express.static('./public'))
app.set ('view engine','ejs')
app.set('views','./src/views')
app.use('/books',booksrouter)
app.use('/authors',aurouter)
app.use('/signup',signuprouter)
app.use('/login',loginrouter)
app.use('/addbook',addbook)
app.use('/addauthor',addauthor)


app.get('/',function(req,res){
    res.render('index',
    {nav,title:'Library',

    })
});

app.listen('4040')
console.log('server ready at port 4040')