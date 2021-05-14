// IMPORY MODELS
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// product belongs to category

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// product belongsToMany Tags (through productTag)
Product.belonsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

// Tags belongsToMany products (throug producTag)
ProductTag.belonsToMany(ProductTag,{
    through: ProductTag,
    foreignKey: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
