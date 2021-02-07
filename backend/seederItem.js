const itemsData = require("./data/itemsData");
const ItemModel = require("./models/item.model");
require('./config/db.config')

ItemModel.deleteMany({}) 
  .then(() => {
    console.log("ItemModels deleted");
    ItemModel.insertMany(itemsData)
      .then(() => {
        console.log('ItemModels added')
        process.exit()
      })
      .catch((err) => {
        console.log('Problems with adding: ', err)
      })
  })
  .catch((err) => {
    console.log("Smth went wrong: ", err);
});