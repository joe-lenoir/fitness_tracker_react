import React from "react";

import "./Routines.css";

const Routines = ({ currentUser, userRoutines }) => {
  return (
    <div className="routines">
      <h2> Routines for {currentUser.username}</h2>
      {userRoutines.map(({ id, title, body }) => (
        <div key={id} className="routine">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Routines;