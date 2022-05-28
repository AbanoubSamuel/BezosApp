const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("./db/mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const testRoutes = require("./routes/testRoutes");

app.use("/api/transaction", testRoutes);

app.listen(3000, () => {
  console.log(`Server is up on 3000`);
});
