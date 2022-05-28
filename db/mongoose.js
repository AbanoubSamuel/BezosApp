const mongoose = require("mongoose");

try {
  let dbLink = "mongodb://localhost:27017/task";
  mongoose.connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB IS CONNECTED");
} catch (error) {
  console.log(error);
  console.log("Hello FROM DB ERROR");
}
