import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  message: String,
  publishedDate: Date,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
