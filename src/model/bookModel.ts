import mongoose from "mongoose";
const schema = mongoose.Schema;

const bookSchema = new schema({
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  categoryId: { type: String, required: true }, // { type: schema.Types.ObjectId, ref: "categorySchema" },
  picture: { type: String, required: true },
  pages: { type: Number, required: true },
  darElNashr: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
});

const Books = mongoose.model("Books", bookSchema);

export default Books;
