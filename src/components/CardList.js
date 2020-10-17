import React from "react";
import Card from "./Card";

/**
 * CardList is a functional component that is
 * responsible for gathering Card components together.
 * Props to CardList (users' profiles) will be given from App component
 */
const CardList = (props) => (
  <React.Fragment>
    <div className="d-flex flex-wrap">
      {props.profiles.map((profile) => (
        <Card {...profile} key={profile.id} />
      ))}
    </div>
  </React.Fragment>
);

export default CardList;
