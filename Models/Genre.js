const {Schema, model} = require('mongoose');

const genreSchema = new Schema({
    name:{
        type: String
    },
    image:{
        type: String
    },
    associatedTo:{
        type: Object
    }
},
{
    timestamps: true
});

module.exports = model('Genre', genreSchema);