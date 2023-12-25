import React from 'react';
import classes from './Post.module.css';


const Post = (props) =>{
  // console.log(props.message);

    return(
      <div>
      
          <div className={classes.item}>
            <img  src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
            {props.message} 
            </div>
            <div className={classes.like}>
              <span> like: {props.likeCount}</span>

            </div>
     

     </div>
    

     
    

    )
}
 export default Post;