var express = require('express');
var router = express.Router();
// const connectionString = process.env.DB_URI || "";

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(connectionString);

//   const all = await queries.getAllItems({});
//   console.log("All items:", all)
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
