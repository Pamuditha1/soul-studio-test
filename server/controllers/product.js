const { Product } = require("../models/product");
const { errorResponse, successResponse } = require("./utils/response");
const { productSchema } = require("./utils/validationSchemas");
const { validate } = require("./utils/validation.js");

exports.addProduct = async (req, res) => {
  try {
    // validate the req body
    const error = validate(req.body, productSchema);
    if (error)
      return errorResponse(res, {
        message: error.details[0].message,
      });

    const { productNo } = req.body;

    // check whether product is already exists
    let product = await Product.findOne({ productNo });
    if (product)
      return errorResponse(res, {
        message: "Product Already Exists",
      });

    let newProduct = new Product(req.body);
    const saved = await newProduct.save();

    successResponse(res, {
      code: 201,
      data: saved,
      message: "Product Saved Successfully",
    });

    return;
  } catch (error) {
    console.error("Error (Add Product) : \n", error);
    errorResponse(res, { code: 500, message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0)
      return errorResponse(res, {
        code: 404,
        message: "No Products Found",
      });

    successResponse(res, {
      data: products,
    });
  } catch (error) {
    console.error("Error (Get Products) : \n", error);
    errorResponse(res, { code: 500, message: error.message });
  }
};
