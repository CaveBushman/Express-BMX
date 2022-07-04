const User = require(`../models/userModel`);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.all = async function (req, res, next) {
  const usersList = await User.find();

  if (!usersList) {
    res.status(500).json({ status: false });
  }
  res.status(200).send(usersList);
};

exports.viewOne = async function (req, res, next) {
  const user = await User.findById(req.params.id);

  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found." });
  }
  res.status(200).send(user);
};

exports.create = async function (req, res, next) {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
  });

  if (!user)
    return res.status(400).json({
      status: "false",
      message: "The user cannot be created!",
    });

  res.status(201).json({
    status: "success",
    data: user,
  });
};

exports.edit = async function (req, res, next) {
  const user = await User.findByIdAndUpdate(
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

  if (!user) return res.status(400).send("The user cannot be updated!");

  res.json({
    status: success,
    data: user,
  });
};

exports.destroy = async function (req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(204)
          .json({ success: true, message: "the user is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
};

exports.login = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email })
  const secret = process.env.secret;
  console.log(user);
  if (!user) {
    return res.status(400).send('The user not found');
  }
  
 if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
   const token = jwt.sign(
     {
       userId: user._id,
       isAdmin: user.isAdmin,
     },
     secret,
     { expiresIn: "1d" }
   );

   res.status(200).send({ user: user.email, token: token });
 } else {
   res.status(400).send("password is wrong!");
 }
};
