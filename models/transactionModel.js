const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    merchant_name: {
      type: String,
      required: true,
    },
    isBezosRlated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
