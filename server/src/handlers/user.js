import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const addUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const existingUser = await UserModel.findOne({ email: body.email });

    if (existingUser)
      return res
        .status(203)
        .json({ message: "User already exists.", status: "failed" });

    if (body.password !== body.confirmPassword)
      return res
        .status(203)
        .json({ message: "Password don't match.", status: "failed" });

    const hashedPassword = await bcrypt.hash(body.password, 12);

    const result = await UserModel.create({
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      password: hashedPassword,
      file: body.file,
    });

    const token = jwt.sign(
      { id: result._id, email: result.email, name: result.name },
      "iamsanjayapaudelandiamafullstackwebdeveloper",
      { expiresIn: "1y" }
    );

    res
      .status(200)
      .json({ result, token, accountType: "custom", status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong !" });
  }
};

const userLogin = async (req, res) => {
  const body = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: body.email });

    if (!existingUser)
      return res
        .status(203)
        .json({ message: "User doesn't exist !", status: "failed" });

    const isPasswordCorrect = await bcrypt.compare(
      body.password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res
        .status(203)
        .json({ message: "Invalid credentials !", status: "failed" });

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        name: existingUser.name,
      },
      "iamsanjayapaudelandiamafullstackwebdeveloper",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result: existingUser,
      token,
      accountType: "custom",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong !" });
  }
};

export { addUser, userLogin };
