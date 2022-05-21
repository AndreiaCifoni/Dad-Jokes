import React from "react";
import DadJokes from "./DadJokes";
import axios from "axios";

const App = () => {
  const getJoke = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      responseType: "json",
    });
    return JSON.parse(response).joke;
  };

  return (
    <div>
      <DadJokes getJoke={getJoke} />
    </div>
  );
};

export default App;
