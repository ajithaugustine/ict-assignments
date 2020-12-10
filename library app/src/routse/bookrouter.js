const express=require('express')
const booksrouter=express.Router()
var books=[
    {
    title:'Aadu jeevitham',
    author:'banyaman',
    genre:'novel',
    img:'aadu jeevitham.jpg'
    },
    {
        title:'wings of fire',
        author:'A.P.J Abdulkalam',
        genre:'autobiography',
        img:'wings of fire.jpg'
        },
        {
            title:'Khasakinte ithihasam',
            author:'o.v vijayan',
            genre:'novel',
            img:'ithihasam.jpg'
            },
            {
                title:'The count of monte cristo',
                author:'Alexandre Dumas',
                genre:'novel',
                img:'monti cristo.jpg'
                },
]



booksrouter.get('/',function(req,res){
    res.render('books',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/addbook',name:'addbook'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library',
    heading:"Books",
    books

    })
});
booksrouter.get('/:i',function(req,res){
    var id=req.params.i
    res.render('book',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}]
    ,title:'library',
    heading:'Book',
    book:books[id]

    })
});
module.exports=booksrouter;