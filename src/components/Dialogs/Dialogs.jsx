/** @format */

import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);

    // подготовка к передаче в store написанного текста (body) в textarea
  };

  return (
    <>
      <div className="dialogs">
        <div className="dialogsItems">{dialogsElements}</div>
        <div className="messages">
          <div>{messagesElement}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
