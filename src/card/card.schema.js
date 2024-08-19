// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  body: joi.string().required(),
  category: joi.string().required(),
  price: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  body: joi.string(),
  category: joi.string(),
  price: joi.string(),
});
