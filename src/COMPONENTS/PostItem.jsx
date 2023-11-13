import React from "react";

function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {props.post.title}.{props.post.id}.
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__button">
          <button>Post</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
