/** @format */

import React from "react";
import { connect } from "react-redux";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setUsersTotalCountActionCreator,
} from "./../../redux/users-reduser";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      ) // Запрос //
      .then((response) => {
        // Ответ //
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      ) // Запрос //
      .then((response) => {
        // Ответ //
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  // Функция которая принимает глобальный стейт всего приложения //
  return {
    users: state.usersPage.users,
    // возвращает список всех пользователей из стейта //
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount));
    },
  }; // Передовать дочерней, презентационной, компоненте колбэки //
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
