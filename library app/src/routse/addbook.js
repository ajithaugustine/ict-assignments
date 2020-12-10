const express=require('express')
const addbook=express.Router()
addbook.get('/',function(req,res){
    res.render('addbook',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library/addbook',
    heading:'Addbook'
    


    })
});

module.exports=addbook;