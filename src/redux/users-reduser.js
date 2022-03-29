/** @format */
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let inicialState = {
  users: [
    {
      id: 1,
      folliwed: false,
      fullName: "Yaroslav",
      likestatus: "I am a boss",
      location: { city: "Belgorod", country: "Russia" },
    },
    {
      id: 2,
      fullName: "Vasya",
      folliwed: true,
      likestatus: "I am a boss too",
      location: { city: "Kursk", country: "Russia" },
    },
    {
      id: 3,
      folliwed: false,
      fullName: "Sasha",
      likestatus: "I am a boss too",
      location: { city: "Moscow", country: "Russia" },
    },
  ],
};

const usersReducer = (state = inicialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const followActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default usersReducer;
