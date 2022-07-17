const Event = require(`../models/eventModel`);

exports.all = async function (req, res, next) {
  const eventsList = await Event.find().populate(`eventClasses`);

  if (!eventsList) {
    res.status(500).json({ status: false });
  }
  res.status(200).send(eventsList);
};

exports.viewOne = async function (req, res, next) {
  const event = await Event.findById(req.params.id).populate('organizer');

  if (!event) {
    res
      .status(500)
      .json({ success: false, message: "The event with the given ID was not found." });
  }
  res.status(200).json({success: true, data: event});
};

exports.create = async function (req, res, next) {
  const event = new Event({
    name: req.body.name,
  });
  event = await event.save();

  if (!event)
    return res.status(400).json({
      status: "false",
      message: "The event cannot be created!",
    });

  res.status(201).json({
    status: "success",
    data: event,
  });
};

exports.edit = async function (req, res, next) {
  const event = await Event.findByIdAndUpdate(
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

  if (!event) return res.status(400).send("The event cannot be updated!");

  res.json({
    success: true,
    data: event,
  });
};

exports.destroy = async function (req, res, next) {
  Event.findByIdAndRemove(req.params.id)
    .then((event) => {
      if (event) {
        return res
          .status(204)
          .json({ success: true, message: "The event is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Event not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
};

exports.count = async function (req, res, next) {

  year = new Date().getFullYear();

  minDate = year + "-01-01";
  maxDate = year + "-12-31";

  const count = await Event.find({
    date: { $gte: new Date(minDate), $lte: new Date(maxDate) },
  }).count();
  res.status(200).json({ success: true, data: count });
};

exports.allByYear = async function (req, res, next) {
  minDate = req.params.year + "-01-01";
  maxDate = req.params.year + "-12-31";
  
  const eventsList = await Event.find({
    date: { $gte: new Date(minDate), $lte: new Date(maxDate) },
  }).sort({date: 1}).populate('organizer');

  if (!eventsList) {
    res.status(500).json({ status: false });
  }
  res.status(200).json({success: true, data: eventsList});
};
