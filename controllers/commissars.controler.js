const Commissar = require(`../models/commissarModel`)

exports.all = async function (req, res, next) {
  const commissarsList = await Commissar.find();

  if (!commissarsList) {
    res.status(500).json({ success: false })
  }
  res.status(200).json({ success: true, data: commissarsList });
};

exports.viewOne = async function (req, res, next) {
    
  const commissar = await Commissar.findById(req.params.id);

  if (!commissar) {
    res.status(500).json({ success: false, message: 'The commissar with the given ID was not found.' })
  }
  res.status(200).send(commissar);
};

exports.create = async function (req, res, next) {
  const commissar = new Commissar({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  commissar = await commissar.save();

  if (!commissar)
    return res.status(400).json({
      succes: false,
      message: "The commissar cannot be created!",
    });

  res.status(201).json({
        
    success: true,
    data: commissar,

  });
};

exports.edit = async function (req, res, next) {
  const commissar = await Commissar.findByIdAndUpdate(
    req.params.id,
    {},
    {
      new: true,
      runValidators: true,
    }
  );

  if (!commissar) return res.status(400).send("The commissar cannot be updated!");

  res.json({
    status: success,
    data: commissar,
  });
};

exports.destroy = async function (req, res, next) {
  Commissar.findByIdAndRemove(req.params.id)
    .then((commissar) => {
      if (commissar) {
        return res
          .status(204)
          .json({ success: true, message: "The commissar is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Commissar not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
};

