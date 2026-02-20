const { Author, Article } = require('../models/');

const getAuthorArticles = async (req, res) => {
  try {
    const articles = await Author.findByPk(req.params.id, {
        include: Article
    });
    res.status(200).json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAuthorArticles
};