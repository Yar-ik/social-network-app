/** @format */
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let inicialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    //   followed: false,
    //   fullName: "Yaroslav",
    //   likestatus: "I am a boss",
    //   location: { city: "Belgorod", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    //   fullName: "Vasya",
    //   followed: true,
    //   likestatus: "I am a boss too",
    //   location: { city: "Kursk", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    //   followed: false,
    //   fullName: "Sasha",
    //   likestatus: "I am a boss too",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ],
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
