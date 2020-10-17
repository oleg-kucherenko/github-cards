import React from "react";

/**
 * Form class is a component that is responsible for input field,
 * 'Add card' and 'Reset' buttons
 */
class Form extends React.Component {
  // State stores current input value and
  // updates through <input onChange ... />
  // This state is used to fetch data from API
  state = { userName: "" };

  /**
   * Function that serves 'Add card' button (button of submit type)
   */
  handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch data from GitHub API
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const data = await resp.json();

    // Send data to update the state of App component
    this.props.onSubmitUpdateAppState(data);

    // Clear input
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username"
          required
          className="form-control"
          style={{ width: "30%", minWidth: "200px" }}
        />

        <button className="btn btn-primary mt-3" type="submit">
          Add card
        </button>

        <button
          className="btn btn-outline-primary mt-3 ml-2"
          type="button"
          onClick={this.props.resetAppState}
        >
          Reset
        </button>
      </form>
    );
  }
}

export default Form;

// Using ref
// class Form extends React.Component {
//   userNameInput = React.createRef();
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.userNameInput.current.value);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="GitHub Username"
//           required
//           ref={this.userNameInput}
//         />
//         <button>Add Card</button>
//       </form>
//     );
//   }
// }
