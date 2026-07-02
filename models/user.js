const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose); //it automatically implement 
                                    //hasing , username , password , salting.
                                    //So we don't have to build these from scratch.

module.exports = mongoose.model("User", userSchema);