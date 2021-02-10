import joi from "joi";
const bookSchema = joi.object({
  bookName: joi.string().min(2).max(40).required(),
  author: joi.string().min(2).max(12).required(),
  categoryId: joi.string().required(), // { type: schema.Types.ObjectId, ref: "categorySchema" },
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
