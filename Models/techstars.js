const { Int32 } = require("bson");
const moongoose = require("mongoose");

const techModel = new moongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },

  availability: {
    type: Boolean,
    required: true,
    default: false,
  },
  location: {
    type: String,
    required: true,
  },
});
module.exports = moongoose.model("TechStars", techModel);
