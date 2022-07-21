const EventClasses = require("../models/eventClassesModel");
const eventClasses = require(`../models/eventClassesModel`);

exports.create = async function (req, res, next) {
  console.log({ ...req.body });
  let eventClasses = new EventClasses({
    ...req.body,
  });
  eventClasses = await eventClasses.save();

  if (!eventClasses)
    return res.status(400).json({
      success: false,
      message: "The classes and fees for events cannot be created!",
    });

  res.status(201).json({
    success: true,
    data: eventClasses,
  });
};

exports.all = async function (req, res, next) {
  const eventsClasses = await EventClasses.find();

  if (!eventsClasses) {
    res.status(500).json({ success: false });
  }
  res.status(200).json({ success: true, data: eventsClasses });
};

exports.viewOne = async function (req, res, next) {
  const eventClasses = await EventClasses.findById(req.params.id);

  if (!eventClasses) {
    res.status(500).json({
      success: false,
      message: "The event with the given ID was not found.",
    });
  }
  res.status(200).json({ success: true, data: eventClasses });
};

