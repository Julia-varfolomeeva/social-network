import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
 let state= props.store.getState().profilePage;

  let addPosts = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
 

  return <MyPosts updateNewPostText={onPostChange} addPosts={addPosts} posts={state.posts}
  newPostText={state.newPostText}/>;
};
export default MyPostsContainer;
