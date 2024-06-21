const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000; // You can choose any available port

app.use(cors()); // Use CORS middleware to allow cross-origin requests

app.get("/time", (req, res) => {
  const { timezone } = req.query;
  const currentTime = new Date().toISOString();

  if (timezone) {
    // Calculate the adjusted time based on the timezone offset provided
    const offset = parseInt(timezone);
    const adjustedDate = new Date(new Date().getTime() + offset * 3600 * 1000);
    const adjustedTime = adjustedDate.toISOString();
    res.json({ currentTime, adjustedTime });
  } else {
    res.json({ currentTime });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
