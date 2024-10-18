const mongoose = require('mongoose')

const product = new mongoose.Schema({
    id: { type: Number, required: true  , unique : true },
    name: { type: String, required: true , unique : true  },
    image: { type: String, required: true },
    createdAt : {type : Date , default: Date.now },
    avalible : {type : Boolean , default: true},
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    des: { type: String, required: true },
}, 'product_details')

mongoose.set('strictQuery', true);

const pModel = mongoose.model('product_details' , product)

module.exports = pModel