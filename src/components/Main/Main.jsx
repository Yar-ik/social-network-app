/** @format */

import React from "react";
import "./Main.css";
import MyPosts from "./MyPosts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";

const Main = (props) => {
  return (
    <main>
      <MainInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </main>
  );
};

export default Main;
