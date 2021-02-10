import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
  userId: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  fisrtname: { type: String, required: true },
  lastname: { type: String, required: true },
  picture: "pic",
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const user = mongoose.model("user", userSchema);

export default user;
