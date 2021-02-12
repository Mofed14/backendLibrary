import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
  userId: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    require: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },

  picture: { type: String, required: true },
  fisrtname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const user = mongoose.model("user", userSchema);

export default user;
