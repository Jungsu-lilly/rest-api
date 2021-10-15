const mongoose = require('mongoose');
const { Schema } = mongoose;
// Object destructuring

const userSchema = new Schema(
    {
        email : {
            type: String,
            required: true
        },

        name: String,

        age: {
            type: Number,
            min: 18,
            max: 50
        }
    },
    {
        // 생성된 시각, 업데이트 된 시각이 기록됨
        timestamps: true
    }
);

module.exports = mongoose.model('User',userSchema);