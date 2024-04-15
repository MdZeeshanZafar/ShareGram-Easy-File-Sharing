const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const fileSchema = new Schema({
    filename: {
        type: 'string',
        required: true
    },
    path: {
        type: 'string',
        required: true
    },
    size: {
        type: 'string',
        required: true
    },
    uuid: {
        type: 'string',
        required: true
    },
    sender: {
        type: 'string',
        required: false
    },
    receiver: {
        type: 'string',
        required: false
    },
}, { timestamps: true});

module.exports = mongoose.model('File', fileSchema)