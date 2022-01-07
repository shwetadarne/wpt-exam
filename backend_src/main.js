const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const { adduser, selectuser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectuserAsync();
  console.log(list);
  res.json(list);
});

app.post("/add-users", async (req, res) => {
  const result = req.body;
  const list = result.data;
  res.json({ message: "user is added" });
});
app.listen(5000, () => console.log("listen method"));
