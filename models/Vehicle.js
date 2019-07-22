const mongoose = require("mongoose")
const Schema = mongoose.Schema

const VehicleSchema = new Schema({

    v_type: { type: String },
    v_reg: { type: String },
    v_color: { type: String },

})

module.exports = mongoose.model('vehicles',VehicleSchema)
