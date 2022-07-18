const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) =>
              moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
          },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = {reactionSchema};