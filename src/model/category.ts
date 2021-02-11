import mongoose from "mongoose";
const schema = mongoose.Schema;

const categorySchema = new schema({
  categoryName: { type: String, required: true },
  categoryDisciption: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const category = mongoose.model("category", categorySchema);

export default category;
