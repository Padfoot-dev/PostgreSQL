const express = require("express");
const {Sequelize} = require("sequelize");
const Recipe = require("./model/Recipe");
const ejs = require("ejs");
const path = require("path");
const { title } = require("process");
const bodyParser = require("body-parser");

const app = express();


const sequelize = new Sequelize('postgres://postgres:Padfoot@123@localhost:5432/test');
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// const sync = async ()=> {
//     await Recipe.sync()
//     .then(res=> console.log(res))
// }
// app.use(sync);

app.get("/", async (req,res)=> {
    let recipes = await Recipe.findAll({raw:true});
    // const data = JSON.stringify(recipes,null,2);
    res.render("index",{recipes})
})

app.get("/add-product" , async (req,res)=> {
    // const a = User.build({firstName:"Abishek" , lastName: "A"});
    // console.log(a.firstName , a.lastName);
    // await a.save();
    // console.log("done");
    res.render("add")
})

app.post("/add-product",async(req,res)=> {

    const {title,description} = req.body;
    await Recipe.create({ title: title, instructions: description })
    .then(result=> console.log(result))
    .catch(err => console.log(err));
    res.redirect("/");

})

app.post("/delete/:id",async (req,res)=> {
    const {id} = req.params;
    await Recipe.destroy({
        where: {
            id:id
        }
    }).then(result => console.log(result)).catch(err => console.log(err))
    res.redirect("/");
})


app.listen(5050,()=> {
    console.log("Listening on port 3000");
})