var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

const items = [
  {
    id: uuid(),
    name: "apple",
    description: "cold and crunchy",
    price: 5,
    unitsRemaining: 5,
    imageURL:
      "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
  },
  {
    id: uuid(),
    name: "pear",
    description: "tasty and sweet",
    price: 6,
    unitsRemaining: 55,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg",
  },
  {
    id: uuid(),
    name: "strawberry",
    description: "taste of summer",
    price: 2,
    unitsRemaining: 1,
    imageURL:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*",
  },
];


/* GET users listing. */
router.get('/', function (req, res, next) {
  return res.send(items);
});

router.get("/:itemId", function (req, res, next) {
  const foundItem = items.find(item => item.id === req.params.itemId);

  if (!foundItem) return res.status(404).send({ message: 'Item not found' });

  return res.send(foundItem);
})

router.post('/', function (req, res, next) {
  if (!req.body.name) {
    return res.status(400).send({ message: 'Item must have a name!' })
  }
  const item = { id: uuid(), name: req.body.name };
  users.push(item);
  return res.send(item);
});

module.exports = router;
