import express from "express";
import Item from "../models/item.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (item) {
      res.status(200).send(item);
    } else {
      res.status(400).send({error: "Item not found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body.item.description)
    const newItem = new Item({
      name: req.body.item.name,
      description: req.body.item.description,
      price: req.body.item.price,
      unitsRemaining: req.body.item.unitsRemaining,
      imageURL: req.body.item.imageURL
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
    console.log(req.params)
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


export default router;
