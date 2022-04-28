import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Heck ya docker!! 🐳" });
});

app.listen(process.env.PORT, () => {
  console.log(`Live on port ${process.env.PORT}`);
});
