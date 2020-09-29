import React from "react";

const PlayersCard = ({ data }) => {
  return (
    <div className="card" key={data.id}>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Height: {data.height}</p>
    </div>
  );
};

export default PlayersCard;
