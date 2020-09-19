import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';




const Profile = (props) => {


  return <div>
    <div>
      <a><img src="https://www.imperiumtapet.com/public/uploads/preview/1920x1080-1776815563727220uohpchfys.jpeg" /></a>
    </div >
    <div>ava+ds</div>
    <MyPosts posts={props.profilePage.posts}
    newPostText={props.profilePage.newPostText} 
    dispatch={props.dispatch} />
    
    
    
  </div>

}
export default Profile;