const express = require("express");
const testControllers = require("../controllers/testController");
const router = express.Router();

router.get("/get", testControllers.getData);

router.post("/create", testControllers.createTransaction);

router.delete("/delete/:id", testControllers.deleteTransactions);

router.patch("/update/:id", testControllers.updateTransactions);

module.exports = router;
