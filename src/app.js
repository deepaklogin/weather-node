const express=require('express');
const app=express();
const port =process.env.PORT || 8000;
const path=require("path");
const hbs=require("hbs")
const staticpath=path.join(__dirname,"../public")
const template=path.join(__dirname,"../templates/views")
const partial=path.join(__dirname,"../templates/partials")
app.set('view engine',"hbs");
app.set('views',template);
hbs.registerPartials(partial)
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    // res.send("Welcome to deepak rajak page");
    res.render("index")
})
app.get("/about",(req,res)=>{
    // res.send("this is about page");
    res.render("about")
})
app.get("/weather",(req,res)=>{
    // res.send("this is weather page");
    res.render("weather")
})

app.get("*",(req,res)=>{
    // res.send("this is 404 page")
    res.render("404page",{
        errmsg:"Oops! page not found"
    })
})


app.listen(port,()=>{
    console.log(`listen port no. ${port}`)
})