/** @format */

import React from "react";
import "./Main.css";
// import MyPosts from "./MyPosts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
  debugger;
  return (
    <main>
      <MainInfo />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Main;
