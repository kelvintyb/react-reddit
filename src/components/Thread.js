import React from "react"

const Thread = (props) => {
  return (
    <li>
      <button value={props.index} onClick={props.onUpvote}>Upvote</button>
      <button value={props.index} onClick={props.onDownvote}>Downvote</button>
      <br/>
      Title: {props.title} Upvotes: {props.upvotes}
      <br/>
      <button value={props.value} onClick={props.onDestroy}>Delete</button>
    </li>
  );
}

export default Thread;
