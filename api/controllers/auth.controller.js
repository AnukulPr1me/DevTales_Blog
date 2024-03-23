import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "all field are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("Signup Successfull");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "all fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "user not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "invalid password"));
    }
    const token = jwt.sign(
      {
        _id: validUser._id,
        username: validUser.username,
        email: validUser.email,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    // Combine token and user data into one response
    res.status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json({ message: 'Signin successful', token, user: rest });
  } catch (error) {
    next(error);
  }
};

