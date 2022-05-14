/** @format */

import React, { useEffect } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";

import { setUserProfile } from "./../../redux/profile-reducer";
import { Outlet, useParams } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProfileContainer = (props) => {
  const params = useParams();
  useEffect(() => {
    let userId = params.userId;
    if (!userId) {
      userId = 2;
    }
    console.log(123);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId) // Запрос //
      .then((response) => {
        // Ответ //
        props.setUserProfile(response.data);
      });
  }, []);

  return (
    <>
      <Profile {...props} profile={props.profile} />
    </>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
