const mediaService = require("./mediaService");
const apiResponse = require("../../../util/apiResponse");
exports.publicChatMedia = async (req, res) => {
  let resp = null;
  try {
    resp = await mediaService.mediaUpload(req, res);
    console.log("rehan shakeel");
    // return successResponse(req, res, { message: "test success" });
  } catch (error) {
    console.log("rehan shakeel news");
    // return errorResponse(req, res, error.message);
  }
  console.log("fine",resp)
  return apiResponse.successResponse(res, resp, "success", 200);
};
