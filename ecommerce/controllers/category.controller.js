//this business logic should not be there so it will go into the category services folder 
// const {Category} = require('../models/index');

// const category = require('../models/category');


const {getAllCategories} =require('../services/category.service');
const getCategories = async(req, res) =>{
      const allCategoriesData = await getAllCategories();   
    // const allCategoriesData = await Category.findAll();
    //this also should not be here
    return res.json({
        message: 'Successfully fetched the categories',
        success: true,
        code: 200,
        data:allCategoriesData // fetching the data from model
        // data:{
        //     name: "electroics",
        //     description: 'description for electronics'
        // }
    });
}

module.exports = {
    getCategories
}