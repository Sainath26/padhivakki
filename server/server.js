const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
  })
);

app.post("/data", (req, res) => {
  const receivedData = req.body;
  var data = JSON.stringify(receivedData);
  saveThis(data);
  saveThis("\n");
  res.status(200).json({ message: req.body });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function saveThis(data) {
  const filename = "sample.txt";

  const formattedData = data;

  fs.appendFile(filename, formattedData, (err) => {
    if (err) {
      console.error("Error saving data:", err);
    } else {
      console.log("Data saved to file successfully!");
    }
  });
}
