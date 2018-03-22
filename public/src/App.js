import React, { Component } from "react";
import axios from "axios";
import Student from "./components/Student/Student";
import Button from "./components/Button/Button";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  onLoginHandler = () => {
    // axios
    //   .get("/auth")
    //   .then(response => {
    window.location.href = "/auth";
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => console.log(err));
  };

  onLogoutHandler = () => {
    window.location.href = "/logout";
  };

  onClickHandler = index => {
    let array = [...this.state.students];
    //index is available here
    array.splice(index, 1);
    this.setState({ students: array });
  };

  componentDidMount() {
    console.log("cdm");
    axios.get("/students").then(response => {
      this.setState({ students: response.data });
    });
  }

  render() {
    //display students
    let displayStudents = this.state.students ? (
      this.state.students.map((student, index) => {
        return (
          <Student
            key={student.id}
            clicked={() => this.onClickHandler(index)}
            id={student.id}
            name={student.student}
            email={student.email_address}
            phone={student.phone}
          />
        );
      })
    ) : (
      <p>Loading...</p>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button clicked={this.onLoginHandler}>Login</Button>
          <Button clicked={this.onLogoutHandler}>Logout</Button>
        </header>
        {displayStudents}
      </div>
    );
  }
}

export default App;
