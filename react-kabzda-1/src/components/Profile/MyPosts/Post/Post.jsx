import React from 'react';
import s from './Post.module.css';





const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://vignette.wikia.nocookie.net/james-camerons-avatar/images/a/a1/Eytukanswrgrw.jpg/revision/latest?cb=20100125020236&path-prefix=pl" />
       { props.message }
      <div>
        <span>like</span>
      </div>
    </div>
  )




}
export default Post;