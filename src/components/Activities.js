import React from "react";

import "./Activities.css";

const Activities = ({ currentUser, userRoutines }) => {
  return (
    <div className="activities">
      <h2> Routines for {currentUser.username}</h2>
      {userRoutines.map(({ id, title, body }) => (
        <div key={id} className="activity">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Activities;