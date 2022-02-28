import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElement = props.state.messages.map((message) => <Message message={message.message} />);

  return (
    <>
      <div className="dialogs">
        <div className="dialogsItems">{dialogsElements}</div>
        <div className="messages">{messagesElement}</div>
      </div>
    </>
  );
};

export default Dialogs;
