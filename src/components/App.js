import React from "react";
import CardList from "./CardList";
import Form from "./Form";

/**
 * App class is a component that is responsible for
 * gathering all components together and
 * storing the state of the application
 */
class App extends React.Component {
  // State stores all added users' profiles.
  // Initial state is an empty array
  state = {
    profiles: [],
  };

  /**
   * Function that sends a reference to it as props to Form component.
   * Form component sends fetched data as an argument of this function
   * to set (update) the state of App component
   */
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  /**
   * Function that sends a reference to it as props to Form component.
   * By clicking on 'Reset' button this function will be
   * invoked and will update App component state to the initial condition (an empty array)
   */
  reset = () => {
    this.setState({
      profiles: [],
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Container */}
        <div className="container">
          {/* --- */}
          {/* Jumbotron */}
          <div className="jumbotron mt-2">
            {/* Title and brief description of the app */}
            <h1 className="display-4">{this.props.title}</h1>
            <p className="lead">
              The web app that fetchs data from GitHub Users' API
            </p>
            <hr className="my-4" />
            <p>
              To use it type the GitHub username and press 'Add card' button
            </p>
            {/* Form component - input and buttons */}
            <Form
              onSubmitUpdateAppState={this.addNewProfile}
              resetAppState={this.reset}
            />
          </div>
          {/* End of Jumbotrom */}

          {/* Cards */}
          <CardList profiles={this.state.profiles} />
          {/* End of Cards */}
          {/* --- */}
        </div>
        {/* End of Container */}
      </React.Fragment>
    );
  }
}

export default App;

// Alternative syntax
// constructor(props) {
//   super(props);
//   this.state = {
//     profiles: [],
//   };
// }
