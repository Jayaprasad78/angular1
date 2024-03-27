const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/full')
.then(()=>{
    console.log("database is connected");
})
.catch((error)=>{
    console.log("error in connecting database",error)
})

