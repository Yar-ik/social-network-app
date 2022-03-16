/** @format */

import React from "react";
import "./Main.css";
import MyPosts from "./MyPosts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
  return (
    <main>
      <MainInfo />
      <MyPostsContainer
        store={props.store}
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </main>
  );
};

export default Main;
