/** @format */
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "IT/` s my first post", likesCount: 11 },
      ],
      newPostText: "THIS IS NEW POST",
    },
    dialogsPage: {
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
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
