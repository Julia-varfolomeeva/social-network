import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () =>{
    return(
      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <div className={classes.posts}>my posts</div>
    
         <Post message='Hi, how are you?' likeCount='20'/>
         <Post message='It is my first post' likeCount='50'/>
         <Post/>
         <Post/>
         <Post/>



      </div>

     
    

    )
}
 export default MyPosts;