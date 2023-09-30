require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe")

// HomePage  
exports.homepage = async(req, res) => {

  try {  

    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    //  Latest Recipes
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    const food = { latest };

    res.render("index", {title: "Cooking Blog - Home", categories, food});
  } catch (error) {
    res.status(500).send({message: error.message || "Error on HomePage"})
  }

}

//  ExploreCategories  
exports.exploreCategories = async(req, res) => {

  try {  

    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", {title: "Cooking Blog - Categories", categories});
  } catch (error) {
    res.status(500).send({message: error.message || "Error on HomePage"})
  }

}

//=====================================================Testing Section for Data Insert into MongoDB===============================================
// async function insertDummyData() {
//   try {
//     await Category.insertMany(
//       [
//       {
//         "name": "Thai",
//         "image": "thai-food.jpg"
//       },
//       {
//         "name": "American",
//         "image": "american-food.jpg"
//       }, 
//       {
//         "name": "Chinese",
//         "image": "chinese-food.jpg"
//       },
//       {
//         "name": "Mexican",
//         "image": "mexican-food.jpg"
//       }, 
//       {
//         "name": "Indian",
//         "image": "indian-food.jpg"
//       },
//       {
//         "name": "Spanish",
//         "image": "spanish-food.jpg"
//       }
//     ]
//     );

//   } catch (error) {
//     console.log("error", + error)
//   }
// }

// insertDummyData()

// async function insertDummyRecipeData(){
//   try {
//     await Recipe.insertMany([
//       { 
//         "name": "Recipe Name Goes Here",
//         "description": `Recipe Description Goes Here`,
//         "email": "recipeemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//       { 
//         "name": "Recipe Name Goes Here",
//         "description": `Recipe Description Goes Here`,
//         "email": "recipeemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDummyRecipeData();