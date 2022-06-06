const fs = require("fs");
let path = "C:/Users/Youcode/Desktop/Test";

const cleane = (req, res) => {
  let files = fs.readdirSync(`${path}`);
  files.forEach((file) => {
    try {
      let stat = fs.lstatSync(`${path}` + "/" + `${file}`);
      if (stat.isDirectory() == true) {
        path = `${path}/${file}`;
        files = fs.readdirSync(`${path}`);
        cleane();
        path = "C:/Users/Youcode/Desktop/Test";
      } else {
        fs.unlinkSync(`${path}` + "/" + `${file}`, (err) => {
          if (!err) {
            res.json(
              { message: "File Delete Successfuly " },
              { time: new Date().toDateString() }
            );
          } else {
            console.log(err, "File not found");
          }
        });
      }
    } catch (e) {
      // lstatSync throws an error if path doesn't exist
      return false;
    }
  });
};

module.exports = {
  cleane,
};
