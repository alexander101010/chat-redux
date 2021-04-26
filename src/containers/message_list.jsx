import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// component imports
import Message from "../components/message";
import MessageForm from "../containers/message_form";

// action imports to link with dispatch
import { fetchMessages } from "../actions";

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

  render() {
    return (
      <div className="channel-container ">
        <div className="channel-title">
          <span>{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          {this.props.messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
        </div>
        <MessageForm />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
