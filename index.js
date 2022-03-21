import ExpressXD from "express";
const app = ExpressXD();

app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname})
})
