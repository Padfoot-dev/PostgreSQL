const {Sequelize , DataTypes}  = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:Padfoot@123@localhost:5432/test');

const Recipe = require("./Recipe");



const createSeeds = async ()=>{

    for( let i = 0;i <=3;i++) {

        await Recipe.create({title:`Dish ${i}`, instructions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aspernatur expedita, a officia eveniet architecto quibusdam optio, delectus quisquam repudiandae dolorum praesentium animi nam magni labore, illum libero voluptate asperiores Nulla quia repellat expedita non doloremque, corrupti veritatis doloribus accusantium ducimus voluptate iste minima porro, est aliquam. Vitae recusandae amet, doloremque, quam, repudiandae laborum earum deserunt voluptatum quasi fugit rem. Corporis, repellat? Doloribus reiciendis deleniti reprehenderit vitae perferendis ullam, excepturi blanditiis! Soluta magnam amet asperiores similique assumenda repellat quis doloremque nesciunt quibusdam esse libero cupiditate, inventore, provident optio rerum alias."})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
}

createSeeds();