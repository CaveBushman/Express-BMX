const Result = require(`../models/resultModel`);

exports.all = async function (req, res, next) {
  const resultsList = await Result.find();

  if (!resultsList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(resultsList);
};

exports.viewOne = async function (req, res, next) {
  const result = await Result.findById(req.params.id);

  if (!result) {
    res
      .status(500)
      .json({ success: false, message: "The result with the given ID was not found." });
  }
  res.status(200).json({ success: true, data: result });
};

exports.create = async function (req, res, next) {
  const result = new Result({});
  result = await result.save();

  if (!result)
    return res.status(400).json({
      success: true,
      message: "The result cannot be created!",
    });

  res.status(201).json({
    success: true,
    data: result,
  });
};

exports.edit = async function (req, res, next) {
  const result = await Result.findByIdAndUpdate(
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

  if (!result) return res.status(400).send("The result cannot be updated!");

  res.json({
    status: success,
    data: result,
  });
};

exports.destroy = async function (req, res, next) {
  Result.findByIdAndRemove(req.params.id)
    .then((result) => {
      if (result) {
        return res
          .status(204)
          .json({ success: true, message: "the result is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Result not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
};
