import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";
import query from "../queries/currentUser";
import { hashHistory } from "react-router";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    //this.props // the old, current set of props
    //nextProps // the next set of props that will be placed when the component is rerendered

    if (!this.props.data.user && nextProps.data.user) {
      //redirect to dashboard
      hashHistory.push("/dashboard");
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        Login:
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}
export default graphql(query)(graphql(mutation)(LoginForm));
