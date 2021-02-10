import mongoose from "mongoose";
const schema = mongoose.Schema;

const adminSchema = new schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const admin = mongoose.model("admin", adminSchema);

export default admin;
