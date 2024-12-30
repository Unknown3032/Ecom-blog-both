import mongoose, { Schema } from "mongoose";

const bannerSchema = mongoose.Schema({

    img_info: {
        url: {
            type: String,
            required: true,
            unique: true
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

export default mongoose.model("banner", bannerSchema);