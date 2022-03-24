/** @format */

import React from "react";
import "./Main.css";
// import MyPosts from "./MyPosts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
  return (
    <main>
      <MainInfo />
      <MyPostsContainer />
    </main>
  );
};

export default Main;
