import React from "react"

const Card = (props) => (
  <div className="card mr-2 mb-2" style={{ width: "12rem" }}>
    <img className="card-img-top" src={props.avatar_url} alt="Company's Logo" />

    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.company}</p>
      <p className="card-text">{props.location}</p>
      <a href={props.html_url} target='_blank'>{props.html_url}</a>
    </div>
  </div>
);

export default Card

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
