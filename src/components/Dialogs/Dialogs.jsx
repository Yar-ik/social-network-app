/** @format */

import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";
// import store from "./../../redux/state";

import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));

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
