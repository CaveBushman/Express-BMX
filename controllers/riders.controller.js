const Rider = require(`../models/riderModel`);

exports.all = async function (req, res, next) {
  const ridersList = await Rider.find().populate(`club`).sort({ lastName: 1 });
  if (!ridersList) {
    res.status(500).json({ status: false });
  }
  res.status(200).json({
    status: "true",
    data: ridersList,
  });
};

exports.allValid = async function (req, res, next) {
  const ridersList = await Rider.find({ isApprowe: true, isActive: true })
    .populate(`club`)
    .sort({ lastName: 1 });
  if (!ridersList) {
    res.status(500).json({ status: false });
  }
  res.status(200).json({
    status: "true",
    data: ridersList,
  });
};

exports.viewOne = async function (req, res, next) {
  const rider = await Rider.findById(req.params.id).populate(`club`);

  if (!rider) {
    res
      .status(500)
      .json({ message: "The rider with the given ID was not found." });
  }
  res.status(200).json({ success: true, data: rider });
};

exports.create = async function (req, res, next) {
  console.log({ ...req.body });
  let rider = new Rider({
    ...req.body,
  });
  rider = await rider.save();

  if (!rider)
    return res.status(400).json({
      success: false,
      message: "The rider cannot be created!",
    });

  // TODO:  send e-mail Komisi BMX
  
  res.status(201).json({
    success: true,
    data: rider,
  });
};

exports.edit = async function (req, res, next) {
  const rider = await Rider.findByIdAndUpdate(
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

  if (!rider) return res.status(400).send("The rider cannot be updated!");

  res.json({
    status: success,
    data: rider,
  });
};

exports.destroy = async function (req, res, next) {
  Rider.findByIdAndRemove(req.params.id)
    .then((rider) => {
      if (rider) {
        return res
          .status(204)
          .json({ success: true, message: "The rider is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Rider not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
};

exports.freePlates = async function (req, res, next) {
  const start = 10;
  const usedPlates = (await Rider.find().select("plate")).map(
    (rider) => rider.plate
  );
  const freePlatesArr = [...Array(1000 - start).keys()]
    .map((i) => i + start)
    .filter((i) => !usedPlates.includes(i));
  res.status(200).json({ freePlates: freePlatesArr });
};

exports.count = async function (req, res, next) {
  const count = await Rider.where({
    isApprowed: true,
    isActive: true,
  }).countDocuments();
  res.status(200).json({ success: true, data: count });
};

exports.getByUCIID = async function (req, res, next) {
  if (req.params.uciid.length !== 11)
    return res.status(404).json({ success: false, message: "Invalid UCI ID." });
  const uciid = req.params.uciid;
  const rider = await Rider.findOne({ uciid: parseInt(uciid) });
  if (!rider)
    return res.status(404).json({
      success: false,
      message: "The rider with the given UCI ID was not found.",
    });
  res.status(200).json({ success: true, data: rider });
};

exports.toApprowe = async function (req, res, next) {
  const count = await Rider.where({
    isApprowe: false,
  }).countDocuments();
  res.status(200).json({ success: true, data: count });
};