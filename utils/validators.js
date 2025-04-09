const zod = require("zod");

exports.bookSchema = zod.object({
    title: zod.string(),
    author: zod.string(),
    category: zod.string().optional(),
    price: zod.number(),
    rating: zod.number(),
    publishedDate: zod.string().optional()
});

exports.userSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});
