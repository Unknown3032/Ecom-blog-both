import mongoose, { Schema } from "mongoose";

const cartItemSchema = mongoose.Schema({

    item_info: {
        user_id: {
            type: String,
            required: true,
            unique: true
        },
        item: {
            type: [],
            required: true,
        },
    }

},
    {
        timestamps: {
            createdAt: 'joinedAt'
        }

    })

mongoose.models = {};
// ProductModel = mongoose.model("Product", ProductSchema);

// module.exports = ProductModel;

export default mongoose.model("cartItem", cartItemSchema);