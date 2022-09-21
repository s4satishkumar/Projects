// //this business logic should not be there so it will go into the category services folder 
// // const {Category} = require('../models/index');

// // const category = require('../models/category');

// // const { response } = require('express');

// // const { createNewCategory, getAllCategories } = require('../services/category.service');
// // now you can impoert all cateegory function in one time and you can fetch all the function by them
//  const { CategoryService } = require('../services/category.service');

// const getCategories = async (req, res) => {
//     const allCategoriesData = await CategoryService.getAllCategories();
//     // const allCategoriesData = await Category.findAll();
//     //this also should not be here
//     return res.json({
//         message: 'Successfully fetched the categories',
//         success: true,
//         code: 200,
//         data: allCategoriesData // fetching the data from model
//         // data:{
//         //     name: "electroics",
//         //     description: 'description for electronics'
//         // }
//     });
// }

// const createCategory = async (req, res) => {
//     console.log("===============" ,req.body)
//     const response = await CategoryService.createNewCategory(req.body);
//     return res.json({
//         message: 'Successfully created the category',
//         success: true,
//         code: 201,
//         data: response
//     });
// }

// const getCategoriesById = async (req,res) =>{
//     console.log("===========", req.params.id)
// const response = await CategoryService.getCategoriesById(req.params.id);
// return res.json({
//     message: 'Successfully fetched the category by ID',
//     success: true,
//     code: 200,
//     data: response
// });
// }
// module.exports = { 
//     getCategories,
//      createCategory,
//      getCategoriesById 
//     }