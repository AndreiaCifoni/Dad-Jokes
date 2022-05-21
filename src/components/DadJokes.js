import React, { useState } from "react";

const DadJokes = ({ getJoke }) => {
  const [joke, setJoke] = useState("");

  const onClickHandler = async () => {
    const newJoke = await getJoke();
    setJoke(newJoke);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Get dad Joke</button>
      <p>{`Dad Joke: ${joke}`}</p>
    </div>
  );
};

export default DadJokes;
