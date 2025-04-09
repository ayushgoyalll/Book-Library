const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, bookController.createBook);
router.put("/:id", authMiddleware, bookController.updateBookById);
router.delete("/:id", authMiddleware, bookController.deleteBookById);


router.get("/search",authMiddleware, bookController.searchBooks);
router.get("/filter",authMiddleware, bookController.getAllBooks);
router.get("/:id", authMiddleware,bookController.getBookById);

module.exports = router;
