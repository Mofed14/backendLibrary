import mongoose from "mongoose";
const schema = mongoose.Schema;

const categorySchema = new schema({
  categoryId: mongoose.Schema.Types.ObjectId,
  categoryName: { type: String, required: true },
  categoryDisciption: { type: String, required: true },
});

const category = mongoose.model("category", categorySchema);

export default category;
