/** @format */

import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { usersAPI } from "./../../api/api";
import { getUserProfile } from "./../../redux/profile-reducer";
import { Link } from "react-router-dom";

const ProfileContainer = (props) => {
  const params = useParams();
  useEffect(() => {
    let userId = params.userId;
    if (!userId) {
      userId = 2;
    }
    props.getUserProfile(userId);
  }, []);
  if (!props.isAuth) {
    return <Link to="/login" />;
  } else {
    return (
      <>
        <Profile {...props} profile={props.profile} />
      </>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
