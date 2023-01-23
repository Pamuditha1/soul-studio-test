const Joi = require("joi");

exports.productSchema = Joi.object({
  productNo: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
});
