import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () =>{
    return(
      <div className={classes.content}>
      <div> 
        <img src='https://white-rainbow.ru/upload/resize_cache/iblock/b26/7sf66d03tagu4tqpxywzr9e18325c05v/600_400_1/BSA_3747_Pano_copy.750.jpg'></img></div>
      <div>
        ava= discription
      </div>
      <MyPosts/>
      </div>

     
    

    )
}
 export default Profile;