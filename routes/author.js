const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author');

router.get('/:id', AuthorController.getAuthorArticles);

module.exports = router;