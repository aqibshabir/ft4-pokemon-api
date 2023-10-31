import React from "react";

const Controls = ({ getPokemon }) => {
  return (
    <>
      <button onClick={() => getPokemon()}>Load more</button>
    </>
  );
};

export default Controls;
