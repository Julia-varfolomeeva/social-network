import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  let post = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef(); //создаем ссылку

  let onAddPosts = () => {
    props.addPosts();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let Clear = () => {
    newPostElement.current.value = "";
  };
  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div>
        <div className={classes.textarea}>
          <textarea
            onClick={Clear}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
          {/* привязываем сюда */}
        </div>

        <div className={classes.button}>
          <button onClick={onAddPosts}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{post}</div>
    </div>
  );
};
export default MyPosts;
