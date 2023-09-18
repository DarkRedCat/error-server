const express = require('express');
const Category = require('../models/Category');
const router = express.Router({ mergeParams: true });

router.post('/:NewCategory', async (req, res) => {
  try {
    const { NewCategory } = req.params;
    if (NewCategory) {
      const listCategory = Category.find();
      await listCategory[0].Category.push(NewCategory);
      const updateArr = await Category.update({
        ...listCategory[0]._doc,
        Category: listCategory[0].Category,
      });
      res.send([updateArr]).status(201);
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e,
    });
  }
});
router.patch('/:delCategory', async (req, res) => {
  try {
    const { delCategory } = req.params;
    if (delCategory) {
      const listCategory = await Category.find();
      const newArr = await listCategory[0].Category.filter(
        (c) => c !== delCategory
      );
      q;

      const updateArr = await Category.update({
        ...listCategory[0]._doc,
        Category: newArr,
      });

      res.send([updateArr]).status(201);
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e,
    });
  }
});
0;
router.get('/', async (req, res) => {
  try {
    const list = await Category.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    });
  }
});

module.exports = router;
