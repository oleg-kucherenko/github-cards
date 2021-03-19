import React from "react"
import CardList from "./CardList"
import Form from "./Form"

class App extends React.Component {
  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }

  reset = () => {
    this.setState({
      profiles: [],
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

          <div className="jumbotron mt-2">
            <h1 className="display-4">{this.props.title}</h1>
            <p className="lead">
              App that fetchs data from GitHub API
            </p>
            <hr className="my-4" />
            <p>
              Type the GitHub username and press 'Add card' button
            </p>
            <Form
              onSubmitUpdateAppState={this.addNewProfile}
              resetAppState={this.reset}
            />
          </div>

          <CardList profiles={this.state.profiles} />

        </div>
      </React.Fragment>
    )
  }
}

export default App

// Alternative syntax
// constructor(props) {
//   super(props);
//   this.state = {
//     profiles: [],
//   };
// }
