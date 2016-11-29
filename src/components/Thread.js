import React from "react"

const Thread = (props) => {
  return (
    <h1>Hello, this is a forum with {props.numThreads} of Threads!!!</h1>
  )
}

export default Thread;

class Thread extends

React.Component {

  render() {
    return (
      <li>
        <button value={this.props.index} onClick={this.props.onUpvote}>Upvote</button>
        <button value={this.props.index} onClick={this.props.onDownvote}>Downvote</button>
        <br/>
        Title: {this.props.title} Upvotes: {this.props.upvotes}
        <br/>
        <button value={this.props.value} onClick={this.props.onDestroy}>Delete</button>
      </li>
    );
  }

}

export default Thread;
