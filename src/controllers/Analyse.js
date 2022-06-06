const fastFolderSize = require("fast-folder-size");
const filePath = "C:/Users/Youcode/AppData/Local/Temp";

const { History } = require("../models");

const Analyse = (req, res) => {
  let result = "";
  fastFolderSize(filePath, (err, bytes) => {
    if (err) {
      throw err;
    }
    result = bytes / 2000 + "KB";
    if (result) {
      History.create({ time_at: new Date().toGMTString(), size: result }).then(
        (response) => {
          // console.log(response)
          res.json({ message: "history saved", result });
        }
      );
    }
  });
};

module.exports = {
  Analyse,
};
