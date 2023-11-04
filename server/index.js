import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//Routes

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});
app.use("/user", userRoutes);
app.use("/question", questionRoutes);

const port = process.env.PORT || 5000;
//connect mongoDB databae
const connection_url = `mongodb+srv://devgoel12072004:9690011021@cluster0.lunbcc5.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(connection_url)
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
