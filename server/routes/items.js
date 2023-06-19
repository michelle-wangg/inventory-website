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
    imageURL: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
  },
  {
    id: uuid(),
    name: "pear",
    description: "tasty and sweet",
    price: 6,
    unitsRemaining: 55,
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg",
  },
  {
    id: uuid(),
    name: "strawberry",
    description: "taste of summer",
    price: 2,
    unitsRemaining: 1,
    imageURL: "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*",
  },
];


/* GET items listing. */
router.get('/', function (req, res, next) {
  return res.send(items);
});

router.get("/:itemId", function (req, res, next) {
  const foundItem = items.find(item => item.id === req.params.itemId);

  if (!foundItem) return res.status(404).send({ message: 'Item not found' });

  return res.send(foundItem);
})

router.post('/', function (req, res, next) {
  console.log(req)
  console.log(req.body.item)
  const itemToBeAdded = req.body.item
  if (!itemToBeAdded.name) {
    console.log("missing name");
    return res.status(400).send({ message: 'Item must have a name!' });
  }
  if (!itemToBeAdded.description) {
    console.log("missing description");
    return res.status(400).send({ message: 'Item must have a description!' });
  }
  if (!itemToBeAdded.price) {
    console.log("missing price");
    return res.status(400).send({ message: 'Item must have a price!' });
  }
  if (!itemToBeAdded.unitsRemaining) {
    console.log("missing unitsRemaining");
    return res.status(400).send({ message: 'Item must have units remaining!' });
  }
  if (!itemToBeAdded.imageURL) {
    console.log("missing imageURL");
    return res.status(400).send({ message: 'Item must have an imageURL!' });
  }

  const item = {
    id: uuid(),
    name: itemToBeAdded.name,
    description: itemToBeAdded.description,
    price: itemToBeAdded.price,
    unitsRemaining: itemToBeAdded.unitsRemaining,
    imageURL: itemToBeAdded.imageURL,
  };
  items.push(item);

  // Send the added item in the response
  return res.send(item);
});


router.delete('/:itemId', function(req, res, next) {
  const foundIndex = items.findIndex((item) => item.id === req.params.itemId);

  if (foundIndex === -1) {
    return res.status(404).send({ message: 'Item not found' });
  }

  const deletedItem = items.splice(foundIndex, 1)[0];
  return res.send(deletedItem);
});

router.patch('/:itemId/addUnit', function(req, res, next) {
  const itemId = req.params.itemId;

  const foundItem = items.find((item) => item.id === itemId);

  if (!foundItem) return res.status(404).send({ message: 'Item not found' });

  foundItem.unitsRemaining ++;

  return res.send(foundItem);
});

router.patch('/:itemId/subtractUnit', function(req, res, next) {
  const itemId = req.params.itemId;

  const foundItem = items.find((item) => item.id === itemId);

  if (!foundItem) return res.status(404).send({ message: 'Item not found' });

  foundItem.unitsRemaining --;

  if (foundItem.unitsRemaining <= 0) {
    const index = items.findIndex(item => item.id === foundItem.id);
    items.splice(index, 1)[0];
  }
  return res.send(foundItem);
})

module.exports = router;

