const {Schema, model} = require('mongoose');

const characterSchema = new Schema({
    image:{
        type: String
    },
    name:{
        type: String
    },
    age:{
        type: Number
    },
    weight:{
        type: Number
    },
    history:{
        type: String
    },
    associatedTo:{
        type: Object
    }
},
{
    timestamps: true
});

module.exports = model('Character', characterSchema);