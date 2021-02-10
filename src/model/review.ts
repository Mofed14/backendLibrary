import mongoose from "mongoose";
const schema = mongoose.Schema;

const reviewSchema = new schema({
  reviewId: mongoose.Types.ObjectId,
  BookId: { type: schema.Types.ObjectId, ref: "bookSchema" },
  userId: { type: schema.Types.ObjectId, ref: "userSchema" },
  textReview: String,
  rate: Number,
  date: { type: Date, default: Date.now() },
});
const review = mongoose.model("review", reviewSchema);
export default review;
