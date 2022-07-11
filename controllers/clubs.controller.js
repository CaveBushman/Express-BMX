
const Club = require(`../models/clubModel`);

exports.all = async function (req, res, next) {
    
    const clubsList = await Club.find().sort({name:1});

    if(!clubsList) {
        res.status(500).json({status: false})
    } 
    res.status(200).json({
      status: "true",
      data: clubsList,
    });
};

exports.viewOne = async function (req, res, next) {
 
    const club = await Club.findById(req.params.id);

    if(!club) {
        res.status(500).json({message: 'The club with the given ID was not found.'})
    } 
    res.status(200).send(club);
};

exports.create = async (req, res, next) => {
  
      const club = await Club.create(req.body);  
        if (!club)
            return res.status(400).json({
                status: "false",
                message: "The club cannot be created!",
            });

    res.status(201).json({       
        status: "success",
        data: club,
        });
};

exports.edit = async function (req, res, next) {
  const club = await Club.findByIdAndUpdate(
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

  if (!club) return res.status(400).send("The club cannot be updated!");

  res.json({
    status: success,
    data: club,
  });
};

exports.destroy = async function (req, res, next) {
  const club = await Club.findByIdAndRemove(req.params.id)
  if (club) {
    console.log("Klub existuje");
    console.log(club)
        res.status(204).send();
      } else {
        res.status(404).json({ success: false, message: "Club not found!" });
      }
};

exports.count = async function (req, res, next) {
  const count = await Club.where({ isActive: true }).countDocuments();
  res.status(200).json({ success: true, count: count });
}