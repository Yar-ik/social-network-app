/** @format */
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let inicialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
};

const usersReducer = (state = inicialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, folliwed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, folliwed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      // устанавливаю пользователей в старый массив с пользователями //
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
