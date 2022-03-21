import ExpressXD from "express";
const app = ExpressXD();

app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname})
})
app.get("/iasked", (rew, res => {
  res.redirect("https://preaytnt.glitch.me");
}))