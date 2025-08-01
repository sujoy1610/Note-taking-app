import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  userEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Note", noteSchema);
