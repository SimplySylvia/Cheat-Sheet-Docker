import express from "express";

const app = express();

app.get("/", (req,res)=>{
  res.json({message: "Heck ya docker!! 🐳"});
})

app.listen(process.env.PORT, ()=>{
  console.log(`Live on port ${process.env.PORT}`);
});