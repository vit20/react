import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg'/>
      { props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;