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
    },
    sideBar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(nextText) {
    this._state.profilePage.newPostText = nextText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
