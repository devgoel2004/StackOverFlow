import mongoose from "mongoose";
import Questions from "../models/questionsModel.js";
import users from "../models/authModel.js";
const pts = 2;

//Post Question Controller
export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const userId = req.userId;
  const postQuestion = new Questions({
    ...postQuestionData,
    userId,
  });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Could not post a new question");
  }
};

//Get All Questions Controllers
export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find().sort({ askedOn: -1 });
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Delete Question Controllers
export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavaliable");
  }
  try {
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Vote Question Controllers
export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value, userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }
  try {
    const question = await Questions.findById(_id);
    const upIndex = question.upVote.findIndex((_id) => _id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );
    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    const user = await users.findById(userId);
    let score = (question.upVote.length - question.downVote.length) * pts;
    user.score1 = Math.max(score, 0);
    user.score = user.score1 + user.score2;
    await user.save();
    await Questions.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};
