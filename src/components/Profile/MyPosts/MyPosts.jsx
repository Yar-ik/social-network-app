/** @format */

import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Form } from "redux-form";
import { Textarea } from "./../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </Form>
  );
};

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <>
      <div className="myPostsBlok">
        <h3> My posts </h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className="posts">{postsElements}</div>
      </div>
    </>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
