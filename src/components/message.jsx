import React from "react";
// import { emojify } from "react-emojione";

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <div className="author">
        <span>{`<< ${author} >>`}</span> <small>{time}</small>
      </div>
      <div className="message-text">{content}</div>
    </div>
  );
};

export default Message;
