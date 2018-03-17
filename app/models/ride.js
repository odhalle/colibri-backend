var mongoose = require('mongoose');

var RideSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true
    },
    last_name: {
        type: String
    },
    first_name: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        zip_code: {
            type: String
        },
        city: {
            type: String
        }
    },
    capacity: {
        type: Number,
        min: [1, 'Too few places'],
        max: 100
    },
    remark: {
        type: String,
    }
//- Trajets arrangés (opt.)
//- Nombre de place dans la voiture (opt.)
})

module.exports = mongoose.model('Ride', RideSchema);