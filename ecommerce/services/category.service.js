const { Category } = require('../models/index');

const getAllCategories = async (req, res) => {
    const allCategoriesData = await Category.findAll();
    return allCategoriesData;
}

module.exports = { getAllCategories };