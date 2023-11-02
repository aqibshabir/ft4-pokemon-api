import React from "react";

const Controls = ({ getPokemon }) => {
  return (
    <>
      <div className="buttonContainer">
        <button onClick={() => getPokemon("", 20)}>Load more</button>
      </div>
    </>
  );
};

export default Controls;
