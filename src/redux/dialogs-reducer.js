/** @format */

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let inicialState = {
  dialogs: [
    { id: 1, name: "Yaroslav" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Sofiya" },
    { id: 4, name: "Antonio" },
    { id: 5, name: "Sergio" },
    { id: 6, name: "Keks" },
  ],
  messages: [
    { id: 1, message: "Hi !" },
    { id: 2, message: "How are your ?" },
    { id: 3, message: "Yo !!!" },
    { id: 4, message: "Yo !!!" },
    { id: 5, message: "Yo !!!" },
    { id: 6, message: "Yo !!!" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
