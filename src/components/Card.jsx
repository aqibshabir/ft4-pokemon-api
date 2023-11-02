import React from "react";

const Card = ({ id, name, image, type, type2 }) => {
  return (
    <div className="cardContainer">
      <div className="numberImageWrapper">
        <div className="number">
          <p>#0{id}</p>
        </div>
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="type">
        <h3>
          {type}
          {type2 ? ` + ${type2}` : ""}
        </h3>
      </div>
    </div>
  );
};

export default Card;
