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
exports.imageUpload = tryCatchAsync(async (req, res, next) => {
  let response_data = null;
  try {
    console.log("detaill");
    console.log(req.file);
    // return
    const file = req.file;
    const path = req.file.path;
    const filename = file.filename;
    const orginalName = file.originalname;
    const resp = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
      public_id: filename,
    });
    console.log("res", resp);
    await unlinkAsync(path);
    response_data = { url: resp.secure_url };
  } catch (error) {
    console.log(error);
  }
  return apiResponse.successResponse(res, response_data, "success", 200);
});
