/** @format */

import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="discriptionBlok">
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={"Hello my friends!"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
