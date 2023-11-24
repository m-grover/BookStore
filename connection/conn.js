//connecting mongodb
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://priyanka0705:Priyanka91800@cluster0.a2vtdui.mongodb.net/crudop?retryWrites=true&w=majority")
.then((res)=>console.log("connected"));