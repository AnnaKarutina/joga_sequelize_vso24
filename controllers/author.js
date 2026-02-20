const { Author, Article } = require('../models/');

const getAuthorArticles = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
        include: Article
    });
    res.status(200).json(author);
  } catch (err) {
    console.error('Error fetching articles:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAuthorArticles
};