/** @format */

import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "./../../redux/users-reduser";
// import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import preloader from "../../assets/images/loading-100.gif";
import { usersAPI } from "./../../api/api";
import { toggleFollowingProgress } from "./../../redux/users-reduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        // Ответ //
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      // Ответ //
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  // Функция которая принимает глобальный стейт всего приложения //
  return {
    // возвращает список всех пользователей из стейта //
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  // диспатчим вызов ActionCreator (объект) //
})(UsersContainer);
