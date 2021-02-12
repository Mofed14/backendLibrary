import mongoose from "mongoose";
const schema = mongoose.Schema;

const categorySchema = new schema({
  categoryName: { type: String, required: true },
  categoryDisciption: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  book: [{ type: schema.Types.ObjectId, ref: "Books" }],
});

const category = mongoose.model("category", categorySchema);

export default category;
