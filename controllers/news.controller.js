const News = require(`../models/newsModel`);

exports.all = async function (req, res, next) {
  const newsList = await News.find().populate(`author`);
  console.log(newsList)

  if (!newsList) {
    res.status(500).json({ success: false })
  }
  res.status(200).json({ success: true, data: newsList });;
};

exports.viewOne = async function (req, res, next) {
  const article = await News.findById(req.params.id);

  if (!article) {
    res
      .status(500)
      .json({ message: "The article with the given ID was not found." });
  }
  res.status(200).json({ success: true, data: article });
};

exports.create = async function (req, res, next) {
  const article = new News({

  });
  article = await article.save();

  if (!article)
    return res.status(400).json({
      success: false,
      message: "The article cannot be created!",
    });

  res.status(201).json({
    success: true,
    data: article,
  });
};

exports.edit = async function (req, res, next) {
    const article = await News.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        icon: req.body.icon || category.icon,
        color: req.body.color,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!article) return res.status(400).send("The article cannot be updated!");

    res.json({
      success: true,
      data: article,
    });
};

exports.destroy = async function (req, res, next) {
        News.findByIdAndRemove(req.params.id)
          .then((article) => {
            if (article) {
              return res
                .status(204)
                .json({ success: true, message: "the article is deleted!" });
            } else {
              return res
                .status(404)
                .json({ success: false, message: "article not found!" });
            }
          })
          .catch((err) => {
            return res.status(500).json({ success: false, error: err });
          });
};

exports.homepage = async function (req, res, next) {

  try {
    const newsList = await News.find().where("onHomepage").equals(true).where("published").equals(true).populate(`author`);
    if (!newsList) {
      res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true, data: newsList });
  } catch (e) {
    console.log(e.message)
  }
};

exports.allPublished = async function (req, res, next) {
  const newsList = await News.find({ published: true }).populate(`author`);

  if (!newsList) {
    res.status(500).json({ success: false });
  }
  res.status(200).json({ success: true, data: newsList });
};