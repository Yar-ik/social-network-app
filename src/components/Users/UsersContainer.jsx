/** @format */

import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "./../../redux/users-reduser";

let mapStateToProps = (state) => {
  // Функция которая принимает глобальный стейт всего приложения //
  return {
    users: state.usersPage.users,
    // возвращает список всех пользователей из стейта //
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  }; // Передовать дочерней, презентационной, компоненте колбэки //
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
