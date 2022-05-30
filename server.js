const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const secret = process.env.SECRET || "no secret";

app.get("/", (req, res) => {
  res.send("Hello World, this ia a secret" + secret + " but dont tell anyone");
});

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
});
