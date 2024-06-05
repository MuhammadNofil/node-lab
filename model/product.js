const mongoose = require("mongoose");

// this is a mdeol it will create a schema in the mongoose for model you can have multiple schema
const ProductSchema = new mongoose.Schema({
    name: {
        // this define the types of data in schema it can be string number date boolean array or objects
        type: String,
        // this is a validation that this is required
        required: true,
    },
    color: {
        type: String,
    },
});
const product = mongoose.model("product", ProductSchema);
module.exports = product;