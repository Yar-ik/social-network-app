/** @format */

import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

import { setUserProfile } from "./../../redux/profile-reducer";
import { useParams } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { usersAPI } from "./../../api/api";

const ProfileContainer = (props) => {
  const params = useParams();
  useEffect(() => {
    let userId = params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.getProfile(userId).then((response) => {
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
