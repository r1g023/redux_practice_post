import React, { useEffect } from "react";

import PlayersCard from "./PlayersCard";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions/actions";

const PlayersList = (props) => {
  useEffect(() => {
    props.fetchPlayers();
  }, []);

  return (
    <div className="cardContainer">
      <h1>Players</h1>
      {props.players.map((item) => (
        <PlayersCard data={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPlayers })(PlayersList);
