const express=require('express')
const aurouter=express.Router()
var authors=[
    {
    author:'Banyaman',
    works:['Aadujeevitham','manja veyil maranangal','Euthanasia','Pravachakanmarude randam pusthakam'],
    img:'banyaman.jpg'
    },
    {
        author:'A.P.J Abdulkalam',
        works:['wing of fire','india 2020','Ignited minds','indomistable spirit'],
        img:'apj.jpg'
        },
        {
        
            author:'o.v vijayan',
            works:['khasakkinte ithihasam','Dharmapuranam','Gurusagaram','Pravachakante vazhi'],
            img:'ov vijayan.jpg'
            },
            {
               
                author:'Alexandre Dumas',
                works:['The three Musketeers','The count of monte cristo','twenty years after'],
                img:'dumas.jpg'
                },
]



aurouter.get('/',function(req,res){
    res.render('authors',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/addauthor',name:'addauthor'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library',
    heading:"Authors",
    authors

    })
});
aurouter.get('/:i',function(req,res){
    var id=req.params.i

    res.render('author',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library',
    heading:'Author',
    author:authors[id]

    })
});
module.exports=aurouter;