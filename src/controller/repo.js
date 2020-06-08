const { popularRepos } = require("../service/github");

async function listPopular(req, res, next) {
  try {
    const { q, lang, page, itemsPerPage, date } = req.query;

    const items = await popularRepos({ q, lang, page, itemsPerPage, date });

    res.json({ data: items });
  } catch (err) {
    next(err);
  }
}

module.exports.listPopular = listPopular;
