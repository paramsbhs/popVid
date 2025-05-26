import mongoose from 'mongoose'

const popVidSchema = mongoose.Schema({
    url: String,
    channel: String,
    likes: String,
    messages: String,
    description: String,
    shares: String
});

export default mongoose.model('popVideos', popVidSchema);

