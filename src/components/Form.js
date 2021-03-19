import React from "react"

class Form extends React.Component {
  state = {
    userName: "",
    errorProfile: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    )
    if (resp.status === 200) {
      this.setState(prevState => ({
        errorProfile: false
      }))
      const data = await resp.json()
      this.props.onSubmitUpdateAppState(data)
    } else if (resp.status === 404) {
      this.setState(prevState => ({
        errorProfile: true
      }))
    }

    this.setState({ userName: "" })
  }

  resetHandler = async () => {
    this.setState(prevState => ({
      errorProfile: false
    }))
    this.props.resetAppState()
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Ex. oleg-kucherenko"
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
            onClick={this.resetHandler}
          >
            Reset
        </button>


        </form>
        { this.state.errorProfile && (
          <div style={{ color: 'blue' }}>
            <br />
            Not found
          </div>
        )}
      </>
    )
  }
}

export default Form

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
