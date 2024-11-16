import mongoose, { Schema } from "mongoose";

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

let profilevarientsVariables = [
    "variant02", "variant04", "variant06", "variant08", "variant17", ""
]

let ProfileImgcomponent = [
    "body",
]

const userSchema = mongoose.Schema({

    personal_info: {

        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: String,
        address: {
            type: String,
            minlength: [3, 'address must be 3 letters long'],
        },
        profile_img: {
            type: String,
            default: () => {
                return `https://api.dicebear.com/9.x/notionists/svg?body=${profilevarientsVariables[Math.floor(Math.random() * profilevarientsVariables.length)]}`

                // `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`

            }
        },
    },
    google_auth: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: {
            createdAt: 'joinedAt'
        }

    })

mongoose.models = {};
// ProductModel = mongoose.model("Product", ProductSchema);

// module.exports = ProductModel;

export default mongoose.model("users", userSchema);