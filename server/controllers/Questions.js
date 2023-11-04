import mongoose from "mongoose";
import Questions from "../models/questionsModel.js";
export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Questions({
    ...postQuestionData,
    userId: req.userId,
  });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Could not post a new question");
  }
};
