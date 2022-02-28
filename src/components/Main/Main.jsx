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
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </main>
  );
};

export default Main;
