/** @format */
import { usersAPI } from "./../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let inicialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "IT/` s my first post", likesCount: 11 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    // Ответ //
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
