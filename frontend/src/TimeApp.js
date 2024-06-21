import React, { useState } from "react";
import axios from "axios";

function TimeApp() {
  const [timezone, setTimezone] = useState("");
  const [timeInfo, setTimeInfo] = useState({
    currentTime: "",
    adjustedTime: "",
  });

  const fetchTime = async () => {
    try {
      // Replace 'http://localhost:4000/time' with your actual API URL if different
      const response = await axios.get("http://localhost:4000/time", {
        params: { timezone },
      });
      setTimeInfo(response.data);
    } catch (error) {
      console.error("Error fetching time data:", error);
      alert("Failed to fetch time data");
    }
  };

  return (
    <div>
      <h1>Time Information</h1>
      <input
        type="text"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        placeholder="Enter Timezone Offset"
      />
      <button onClick={fetchTime}>Get Time</button>
      <div>
        <p>Current Time (UTC): {timeInfo.currentTime}</p>
        <p>Adjusted Time: {timeInfo.adjustedTime}</p>
      </div>
    </div>
  );
}

export default TimeApp;
