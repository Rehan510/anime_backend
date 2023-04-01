const express = require("express");
const mongoose = require("mongoose");
const publicChatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  message_type: {
    type: String,
  },
  sender_name: {
    type: String,
  },
});

module.exports = mongoose.model("PublicChat", publicChatSchema);
