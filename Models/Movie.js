const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    image:{
        type: String
    },
    title:{
        type: String
    },
    createDate:{
        type: Date
    },
    calification:{
        type: Number
    },
    characterAssociated:{
        type: Object
    }
},
{
    timestamps: true
});

module.exports = model('Movie', movieSchema);