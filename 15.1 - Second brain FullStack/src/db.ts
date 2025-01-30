import mongoose, { Schema, Model } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const Users = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

const Content = new Schema({
    title: String,
    link: String,
    tags: [{
        type: ObjectId,
        ref: 'tag'
    }],
    userId: {
        type: ObjectId,
        ref: 'users',
        require: true
    }
})


export const UserModel = mongoose.model( 'users', Users);
export const ContentModel = mongoose.model( 'content', Content);
