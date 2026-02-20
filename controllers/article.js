const { Article, Author } = require('../models/');

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ 
        where: {
            slug: req.params.slug 
        }, 
        include: Author
    });
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (err) {
    console.error('Error fetching article:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllArticles,
  getArticleBySlug,
};