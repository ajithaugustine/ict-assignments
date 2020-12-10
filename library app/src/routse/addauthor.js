const express=require('express')
const addauthor=express.Router()
addauthor.get('/',function(req,res){
    res.render('addauthor',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library/addauthor',
    heading:'Addauthor'
    


    })
});

module.exports=addauthor;