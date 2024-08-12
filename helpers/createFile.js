const fs = require("fs");
async function createFile(nameFile = "") {
  const fileExist = fs.existsSync(nameFile);
  if (!fileExist) {
    console.log(`${nameFile} does not exist!`);
    fs.writeFile("order.json", "", function (err) {
      if (err) throw err;
      console.log(`create file ${nameFile} successfully`);
    });
  }
}
module.exports = createFile;
