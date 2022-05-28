const TransactionModel = require("../models/transactionModel");

exports.getData = async (req, res) => {
  try {
    const transactions = await TransactionModel.find();

    res.send(transactions);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const data = req.body;
    //Store data in DB
    const newTransaction = new TransactionModel(data);
    await newTransaction.save();
    res.send(newTransaction);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteTransactions = async (req, res) => {
  try {
    const _id = req.params.id;

    const deletedTransaction = await TransactionModel.findByIdAndDelete(_id);

    if (!deletedTransaction) {
      return res.status(404).json({ msg: "Transaction Not Found" });
    }

    res.send({ msg: "Transaction Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.updateTransactions = async (req, res) => {
  try {
    const _id = req.params.id;
    const newData = req.body;

    const newTransaction = await TransactionModel.findByIdAndUpdate(
      _id,
      newData,
      { new: true }
    );

    if (!newTransaction) {
      return res.status(404).json({ msg: "Transaction Not Found" });
    }

    res.send(newTransaction);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
