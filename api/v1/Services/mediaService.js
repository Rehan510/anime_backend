const tryCatchAsync = require("../../../util/tryCatchAsync");
const apiResponse = require("../../../util/apiResponse");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dyxfd7ura",
  api_key: "498662854786875",
  api_secret: "AiBDsiRhipEel-C_jkIT1mFuNxI",
});
exports.mediaUpload = async (req, res) => {
  let resp=null
  try {
    const file = req.file;
    const path = req.file.path;
    const filename = file.filename;
    const orginalName = file.originalname;
     resp = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
      public_id: filename,
    });
    console.log("mediaupload", resp);
    await unlinkAsync(path);
  } catch (error) {
    console.log(error);
  }
  return resp;
};
