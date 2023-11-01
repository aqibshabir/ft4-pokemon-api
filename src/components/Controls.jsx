import React from "react";

const Controls = ({ getPokemon }) => {
  return (
    <>
      <div className="buttonContainer">
        <button onClick={() => getPokemon()}>Load more</button>
      </div>
    </>
  );
};

export default Controls;
