const Event = require(`../models/eventModel`)

exports.all = async function (req, res, next) {
  const eventsList = await Event.find();

  if (!eventsList) {
    res.status(500).json({ status: false });
  }
  res.status(200).send(eventsList);
};

exports.viewOne = async function (req, res, next) {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res
      .status(500)
      .json({ message: "The event with the given ID was not found." });
  }
  res.status(200).send(event);
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
    status: success,
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

