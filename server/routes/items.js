import express from "express";
import Item from "../models/item.js";

const router = express.Router();

router.get('/', async (req, res) => {
  const { search, sort } = req.query;
  const filter = {};

  if (search) {
    // Add search condition if search parameter is provided
    filter.name = { $regex: search, $options: 'i' };
  }

  let sortOptions = {};
  if (sort === 'name') {
    // Sort by name in ascending order
    sortOptions = { name: 1 };
  }

  try {
    const items = await Item.find(filter).sort(sortOptions);
    res.json(items);
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).json({ error: 'Failed to get items' });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (item) {
      res.status(200).send(item);
    } else {
      res.status(400).send({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body.item.description);
    const newItem = new Item({
      name: req.body.item.name,
      description: req.body.item.description,
      price: req.body.item.price,
      unitsRemaining: req.body.item.unitsRemaining,
      imageURL: req.body.item.imageURL,
    });
    const result = await newItem.save();
    res.status(200).send(result);
  } catch (error) {
    console.error("something went wrong", error);
    res.status(500).send({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params);
    const itemId = req.params.id;

    // Find and delete the item by ID
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      // Item not found
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(deletedItem); // Respond with the deleted item
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

router.patch("/:id/subtractUnit", async (req, res) => {
  try {
    const foundItem = await Item.findById(req.params.id);
    console.log("found item is" , foundItem)
    console.log(foundItem)

    if (!foundItem) return res.status(404).send({ message: "Item not found" });

    foundItem.unitsRemaining = Number(foundItem.unitsRemaining - 1);

    const updatedItem = await foundItem.save();

    if (updatedItem.unitsRemaining <= 0) {
      const updatedItem = await Item.findByIdAndDelete(req.params.id);
    }
    return res.send(updatedItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to subtract unit from item" });
  }
});

router.patch("/:id/addUnit", async (req, res) => {
  try {
    const foundItem = await Item.findById(req.params.id);
    console.log("found item is" , foundItem)
    console.log(foundItem)

    if (!foundItem) return res.status(404).send({ message: "Item not found" });

    foundItem.unitsRemaining = Number(Number(foundItem.unitsRemaining) + Number(1));

    const updatedItem = await foundItem.save();

    if (updatedItem.unitsRemaining <= 0) {
      const updatedItem = await Item.findByIdAndDelete(req.params.id);
    }
    return res.send(updatedItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to subtract unit from item" });
  }
});

export default router;
