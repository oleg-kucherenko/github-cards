import React from "react";

/**
 * Card class is a functional component that is responsible for user card.
 * Props for Card component (one user profile) will be given from
 * CardList component
 */
const Card = (props) => (
  <div className="card mr-2 mb-2" style={{ width: "12rem" }}>
    <img className="card-img-top" src={props.avatar_url} alt="Company's Logo" />

    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.company}</p>
    </div>
  </div>
);

export default Card;

// class Card extends React.Component {
//   render() {
//     const profile = this.props;

//     return (
//       <div className="card mr-2 mb-2" style={{ width: "12rem" }}>
//         <img
//           className="card-img-top"
//           src={profile.avatar_url}
//           alt="Company's Logo"
//         />

//         <div className="card-body">
//           <h5 className="card-title">{profile.name}</h5>
//           <p className="card-text">{profile.company}</p>
//         </div>
//       </div>
//     );
//   }
// }
