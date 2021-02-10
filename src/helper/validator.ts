import joi from "joi";

// books validation
const bookSchema = joi.object({
  bookName: joi.string().min(2).max(40).required(),
  author: joi.string().min(2).max(12).required(),
  picture: joi.string().required(),
  pages: joi.number().required(),
  darElNashr: joi.string().required(),
  price: joi.number().required(),
  createdAt: { type: Date, default: Date.now },
  description: joi.string().min(100).max(1000).required(),
});

export function ValidateBook(book: any) {
  return bookSchema.validate(book);
}

// category validation
const categorySchema = joi.object({
  categoryName: joi.string().required(),
  categoryDisciption: joi.string().min(100).max(1000).required(),
});

export function ValidateCategory(category: any) {
  return categorySchema.validate(category);
}

// user validation
import customeJoi from "joi-phone-number";
const userSchema = joi.object().keys({
  username: joi.string().min(2).max(40).required(),
  password: joi.string().min(3).max(15).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  fisrtname: joi.string().required(),
  lastname: joi.string().required(),
  picture: "pic",
  address: joi.string().required(),
  phoneNumber: customeJoi.string().phoneNumber(),
});
export function ValidateUser(user: any) {
  return userSchema.validate(user);
}

// admin validation
const adminSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export function ValidateAdmin(admin: any) {
  return adminSchema.validate(admin);
}

// review validation
const reviewSchema = joi.object({
  textReview: joi.string(),
  rate: joi.number().min(1).max(5),
  date: { type: Date, default: Date.now() },
});

export function ValidateReview(review: any) {
  return reviewSchema.validate(review);
}
