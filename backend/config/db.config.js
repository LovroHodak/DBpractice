const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/practice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB practice connected");
})
.catch((err) => {
  console.log("Error: ", err);
});