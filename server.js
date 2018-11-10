const express=require("express");
const mongoose=require("mongoose");
const routes=require("./routes");
const app=express();
const PORT= process.env.PORT || 3006;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
