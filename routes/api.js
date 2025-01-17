const express = require("express");
const { sayHello, generateToken, postBody } = require("../controllers/authController");
const router = express.Router();

// Routes
router.get("/hello", sayHello); // GET /api/hello
router.get("/generate-token", generateToken); // GET /api/generate-token
router.post("/post-body", postBody); // POST /api/post-body

module.exports = router;
