import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { ApiError } from "../Utils/ApiError.js";
import { User } from "../Models/user.model.js";

const registerUser = () => {
  return asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    if (!username && !email && !password) {
      throw new ApiError(400, "username email password required");
    }

    const isUserExist = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExist) {
      throw new ApiError(400, "user already exist");
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "user not created something went wrong");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, createdUser, "user registered succesful"));
  });
};

export { registerUser };
