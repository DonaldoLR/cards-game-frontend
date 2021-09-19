import React from "react";
import { NavLink } from "react-router-dom";
const Player = ({ id, name, avatarImage }) => {
  return (
    <div>
      <div className='card' style={{ width: "18rem" }}>
        <img src={avatarImage} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to={`/users/${id}`} className='btn btn-primary'>
            View card inventory
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Player;
