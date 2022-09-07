const { Category } = require('../models/index');

const getAllCategories = async (req, res) => {
    const allCategoriesData = await Category.findAll();
    return allCategoriesData;
}

const createNewCategory = async(data) =>{
    const newCategory = await Category.create({
        name:data.name,
        description:data.description
        
    })
    return newCategory;
}

module.exports = { getAllCategories,createNewCategory };