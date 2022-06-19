/** @format */

import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";
import { Link } from "react-router-dom";
// import { Field } from "redux-form";
// import { reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  // let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Link to="/login" />;
  //  alert(props.isAuth)

  return (
    <>
      <div className="dialogs">
        <div className="dialogsItems">{dialogsElements}</div>
        <div className="messages">
          <div>{messagesElement}</div>
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </>
  );
};

// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field
//           component="textarea"
//           name="newMessageBody"
//           placeholder="Enter your message"
//         />
//       </div>
//       <div>
//         <button>Send</button>
//       </div>
//     </form>
//   );
// };

// const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
//   AddMessageForm
// );

export default Dialogs;
