const tryCatchAsync = require("../../../util/tryCatchAsync");
const apiResponse = require("../../../util/apiResponse");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dyxfd7ura",
  api_key: "498662854786875",
  api_secret: "AiBDsiRhipEel-C_jkIT1mFuNxI",
});
exports.imageUpload = tryCatchAsync(async (req, res, next) => {
  let response_data = null;
  try {
    const file = req.file;
    const path = req.file.path;
    const filename = file.filename;
    const orginalName = file.originalname;
    const resp = await cloudinary.uploader.upload(path, { public_id: filename });
    console.log("res", resp);
    response_data = { url: resp.secure_url };
  } catch (error) {
    console.log(error);
  }
  return apiResponse.successResponse(res, response_data, "success", 200);
});
