import React from "react";
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="sidebar"></div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
