import React from "react";

const PokemonContainer = ({ image }: { image: string }) => {
  return (
    <div className="circle-container">
      <div className="outer-circle">
        <div className="inner-circle">
          <img src={image} alt="pokemon" />
        </div>
        <div className="lines">
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
