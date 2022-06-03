const fastFolderSize = require("fast-folder-size");
const filePath = "C:/Users/Youcode/AppData/Local/Temp";

const Analyse = (req, res) => {
  let result = "";
  fastFolderSize(filePath, (err, bytes) => {
    if (err) {
      throw err;
    }
    result = bytes / 2000 + "KB";
    res.json(result)
  });
};

module.exports = {
  Analyse,
};
