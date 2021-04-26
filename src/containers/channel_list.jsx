import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, fetchMessages } from "../actions";

class ChannelList extends Component {
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectChannel);
    }
  };

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };

  renderChannel = (channel) => {
    return (
      <li key={channel} onClick={() => this.handleClick(channel)}>
        #{channel}
      </li>
    );
  };

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>{this.props.channels.map(this.renderChannel)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages, selectChannel }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
