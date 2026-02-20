const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

router.get('/', ArticleController.getAllArticles);
router.get('/article/:slug', ArticleController.getArticleBySlug);

module.exports = router;