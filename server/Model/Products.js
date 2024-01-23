const {Schema,model} = require("mongoose");

const ProductSchema = new Schema(
    {
        name : {
            type: String
        },
        description:{
            type:String
        },
        category:{
            type:String
        },
        quantity:{
            type:Number
        },
        price:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

module.exports = model("products",ProductSchema)