import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setInput({
  //       ...inputs
  //     [name]: value,
  //   });
  // };
  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="input-field">
            <label>Email</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="btn"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
