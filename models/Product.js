import mongoose, { Schema } from "mongoose";

const productSchema = mongoose.Schema({

    product_info: {
        images: {
            type: [],
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        desc: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        subCategory: {
            type: String,
            required: true,
        },

        theme: {
            type: String,
            required: true,
        },

        subTheme: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true

        },

        quantity: {
            type: Number,
            required: true
        },

        sales: {
            type: Number,
            required: true
        },

        colors: {
            type: [],
            required: true
        },

        bulletPoints: {
            type: [],
            required: true
        },

        keyHighlights: {
            type: [],
            required: true
        },

        sizes: {
            type: [],
            required: true
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

export default mongoose.model("products", productSchema);