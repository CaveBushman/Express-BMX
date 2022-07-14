
const Club = require(`..//models/clubModel`);

exports.all = async function (req, res, next) {
    
    const clubsList = await Club.find().sort({name:1});

    if(!clubsList) {
        res.status(500).json({success: false})
    } 
    res.status(200).json({
      success: true,
      data: clubsList,
    });
};

exports.viewOne = async function (req, res, next) {
 
    const club = await Club.findById(req.params.id);

    if(!club) {
        res.status(500).json({succes: false, message: 'The club with the given ID was not found.'})
    } 
  res.status(200).json({ succes: true, data: club });
};

exports.create = async (req, res, next) => {
  
      const club = await Club.create(req.body);  
        if (!club)
            return res.status(400).json({
                success: "false",
                message: "The club cannot be created!",
            });

    res.status(201).json({       
        success: "success",
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

  if (!club) return res.status(400).json({ success: false, message: "Club can not be updated" });

  res.json({
    status: success,
    data: club,
  });
};

exports.destroy = async function (req, res, next) {
  const club = await Club.findByIdAndRemove(req.params.id)
  if (club) {
    console.log(club)
        res.status(204).send();
      } else {
        res.status(404).json({ success: false, message: "Club not found!" });
      }
};

exports.count = async function (req, res, next) {
  const count = await Club.where({ isActive: true }).countDocuments() - 1; //bez klubové příslušnosti odečten
  res.status(200).json({ success: true, data: count });
}