import React, { useState } from "react";
import { connect } from "react-redux";
import { postPlayers } from "../actions/actions";

const PlayersForm = (props) => {
  const [player, setPlayer] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
    console.log(e.target.value, "entering in INPUT");
  };

  const submitPlayer = (e) => {
    e.preventDefault();
    setPlayer({ name: "", age: "", height: "" });
    props.postPlayers(player);
  };

  return (
    <div>
      <form id="playerForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Enter Name"
          value={props.name}
          onChange={handleChanges}
          className="input"
        />

        <label htmlFor="name">Age:</label>
        <input
          type="text"
          name="age"
          label="age"
          placeholder="Enter age"
          value={props.age}
          onChange={handleChanges}
          className="input"
        />

        <label htmlFor="name">Height:</label>
        <input
          type="text"
          name="height"
          label="height"
          placeholder="Enter height"
          value={props.height}
          onChange={handleChanges}
          className="input"
        />
        <button onClick={submitPlayer}>ADD PLAYER</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    isPosting: state.isPosting,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postPlayers })(PlayersForm);
