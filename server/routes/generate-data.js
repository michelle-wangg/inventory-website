import Item from "../models/item.js";

function generateData() {
  const apple = new Item({
    name: "apple",
    description: "cold and crunchy",
    price: 5,
    unitsRemaining: 5,
    imageURL:
      "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
  });
  const pear = new Item({
    name: "pear",
    description: "tasty and sweet",
    price: 6,
    unitsRemaining: 55,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg",
  });
  const strawberry = new Item({
    name: "strawberry",
    description: "taste of summer",
    price: 2,
    unitsRemaining: 1,
    imageURL:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*",
  });

  apple.save();
  pear.save();
  strawberry.save();
}

export default generateData;
