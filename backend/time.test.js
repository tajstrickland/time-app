const request = require("supertest");
const express = require("express");
const app = express();

app.get("/time", (req, res) => {
  const { timezone } = req.query;
  const currentTime = new Date().toISOString();

  if (timezone) {
    const offset = parseInt(timezone, 10) * 3600 * 1000;
    const adjustedDate = new Date(new Date().getTime() + offset);
    const adjustedTime = adjustedDate.toISOString();
    res.json({ currentTime, adjustedTime });
  } else {
    res.json({ currentTime });
  }
});

describe("GET /time", () => {
  test("responds with current time in UTC", async () => {
    const response = await request(app).get("/time");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("currentTime");
  });

  test("responds with adjusted time based on timezone", async () => {
    const timezoneOffset = 3; // UTC + 3 hours
    const response = await request(app).get(`/time?timezone=${timezoneOffset}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("adjustedTime");
  });
});
