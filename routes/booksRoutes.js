const router=require('express').Router(); //yaha router ko get krlia
const bookModel=require("../models/bookmodel") //imported bookmodel

//post req
router.post("/add",async(req,res)=>{
    try{
         const data=req.body;  //frontend m jo data console m jata h wo req.body utha leti h 
         const newBook=new bookModel(data) ;//new book created   //abb iss data ko bookModel m daalna hai
         await newBook.save().then(()=>{
            res.status(200).json({message:"book added successfully"})
            
         });//.then agr data save hua to response dega
    }
    catch(error){
        console.log(error)

    }
}) 
//GET REquest
router.get("/getbooks",async(req,res)=>{
    try{
        let books;
         
        books= await bookModel.find();
            res.status(200).json({books})
    }
    catch(error){
        console.log(error)

    }
}) 
//GET REQUEST WIT HELP OF ID
router.get("/getbooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
       
         
        book= await bookModel.findById(id);
            res.status(200).json({book})
    }
    catch(error){
        console.log(error)

    }
})

//UPDATE BOOK BY ID
router.put("/updateBook/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    const {Bookname,desc,author,image,price}=req.body;
    try{
       
         
       book= await bookModel.findByIdAndUpdate(id,{
            Bookname,
            desc,
            author,
            image,
            price

        });
       book= await book.save().then(()=>res.json({message:"data updated"}))
            
    }
    catch(error){
        console.log(error)

    }
})

//DELETE book by id
router.delete("/deleteBook/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    const {Bookname,desc,author,image,price}=req.body;
    try{
       await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"data deleted successfully"}))
            
    }
    catch(error){
        console.log(error)

    }
})
//app.use  help se data to post krenge
module.exports=router; //exported router