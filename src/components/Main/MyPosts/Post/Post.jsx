/** @format */

import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdKiF94d4isf8a_Vr5JVLymy6Q-TsF4TrkNDuQt2tCVmRE0FGq8l60QFqzPggmLmgiUs&usqp=CAU" />
      {props.message}
      <div>
        <div>
          <span>like </span>
          {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
