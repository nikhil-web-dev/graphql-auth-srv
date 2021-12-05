import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/SignUp";
import { graphql } from "react-apollo";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up Form</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignUpForm);
