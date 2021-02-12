"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateReview = exports.ValidateAdmin = exports.ValidateUser = exports.ValidateCategory = exports.ValidateBook = void 0;
const joi_1 = __importDefault(require("joi"));
// books validation
const bookSchema = joi_1.default.object({
    bookName: joi_1.default.string().min(2).max(40).required(),
    author: joi_1.default.string().min(2).max(12).required(),
    picture: joi_1.default.string().required(),
    pages: joi_1.default.number().required(),
    darElNashr: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    createdAt: { type: Date, default: Date.now },
    description: joi_1.default.string().min(100).max(1000).required(),
});
function ValidateBook(book) {
    return bookSchema.validate(book);
}
exports.ValidateBook = ValidateBook;
// category validation
const categorySchema = joi_1.default.object({
    categoryName: joi_1.default.string().required(),
    categoryDisciption: joi_1.default.string().min(100).max(1000).required(),
    books: joi_1.default.string(),
});
function ValidateCategory(category) {
    return categorySchema.validate(category);
}
exports.ValidateCategory = ValidateCategory;
// user validation
const userSchema = joi_1.default.object().keys({
    username: joi_1.default.string().min(2).max(40).required(),
    password: joi_1.default.string().min(3).max(15).required(),
    email: joi_1.default
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    fisrtname: joi_1.default.string().required(),
    lastname: joi_1.default.string().required(),
    // picture: joi.string(),
    address: joi_1.default.string().required(),
    phoneNumber: joi_1.default.number().max(11).required(),
});
function ValidateUser(user) {
    return userSchema.validate(user);
}
exports.ValidateUser = ValidateUser;
// admin validation
const adminSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
function ValidateAdmin(admin) {
    return adminSchema.validate(admin);
}
exports.ValidateAdmin = ValidateAdmin;
// review validation
const reviewSchema = joi_1.default.object({
    textReview: joi_1.default.string(),
    rate: joi_1.default.number().min(1).max(5),
    date: { type: Date, default: Date.now() },
});
function ValidateReview(review) {
    return reviewSchema.validate(review);
}
exports.ValidateReview = ValidateReview;
//# sourceMappingURL=validator.js.map