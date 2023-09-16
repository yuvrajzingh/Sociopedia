
import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: {type: String, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  parentId: {  //In case the thread is a comment
    type: String
  },
  children: [  //so that the threads can have threads (basically recursion)
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Thread'
    }
  ]
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema); // because for the first time mongoose model won't exist so it will fall back and create one and then if it calls it, it'll already have a mongoose model in the database so it's gonna know to create it off of that instance.

export default Thread;



 