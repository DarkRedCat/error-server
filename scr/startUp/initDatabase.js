// 1. У любого пользователя будет как минимум в БД qualities & professions
// 2. Они равны mock данным

const Product = require('../models/Products');
const productMock = require('../mock/Products.json');

const User = require('../models/User');
const UserMock = require('../mock/User.json');

const Category = require('../models/Category');
const CategoryMock = require('../mock/Category.json');

module.exports = async () => {
  const products = await Product.find();
  const users = await User.find();
  const category = await Category.find();

  if (products.length !== productMock.length) {
    await createInitialEntity(Product, productMock);
  }
  if (users.length == 0) {
    await createInitialEntity(User, UserMock);
  }
  if (category.length !== CategoryMock.length) {
    await createInitialEntity(Category, CategoryMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);

        await newItem.save();
        return newItem;
      } catch (e) {
        console.log(e);
        return e;
      }
    })
  );
}
