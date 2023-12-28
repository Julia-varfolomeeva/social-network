import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


 let post= props.posts.map((p)=>{
  return (
    <Post message={p.message} likeCount={p.likeCount} />
  )
 })


  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div>
        <div className={classes.textarea}>
          <textarea></textarea>
        </div>

        <div className={classes.button}>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        
      {post}
      </div>
    </div>
  );
};
export default MyPosts;
