/** @format */

import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="profile-img">
        <img
          src="https://mircanada.ru/wp-content/uploads/2019/05/sfinks1.jpg"
          alt=""
        />
      </div>
      <div className="discriptionBlok">
        <img src={props.profile.photos.large} alt="" />
        ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
