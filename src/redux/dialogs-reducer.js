/** @format */

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
};

const dialogsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
