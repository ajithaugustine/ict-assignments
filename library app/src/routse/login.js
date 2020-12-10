const express=require('express')
const loginrouter=express.Router()

loginrouter.get('/',function(req,res){
    res.render('login',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library/login',
    


    })
});

module.exports=loginrouter;