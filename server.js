const express = require("express")

const app = express();
const PORT = process.env.PORT;

const sendMail = require("./controllers/sendMail")

app.get("/", (req, res) => {
  res.send("I am a server")
});

app.get("/mail", sendMail);


const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no. ${PORT}`)
    })
  } catch (error) {}
}

start();