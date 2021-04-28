import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// component imports

// action imports to link with dispatch
import { createMessage } from "../actions";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
    this.setState({ value: "" }); // reset input
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => {
            this.messageBox = input;
          }}
          type="text"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
