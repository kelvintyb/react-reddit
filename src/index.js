import {render} from 'react-dom';
import Thread from "./components/Thread"
import Form from "./components/Form"
import Title from "./components/Title"
import React from 'react';

class Forum extends React.Component {
  constructor(){
    super();
    this.state = {
      threadArr: [],
      currTitle: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    let threadArr = this.state.threadArr.slice();
    threadArr.push({title: this.state.currTitle, upvotes: 0});
    threadArr.sort((firstThread,secondThread) => secondThread.upvotes - firstThread.upvotes)
    this.setState({threadArr})
  }
  handleChange(e){
    this.setState({currTitle: e.target.value})
  }
  handleDestroy(e){
    let threadArr = this.state.threadArr.slice()
    let threadIdx = parseInt(e.target.value)
    threadArr.splice(threadIdx, 1);
    this.setState({threadArr})
  }
  handleUpvote(e){
    let threadArr = this.state.threadArr.slice()
    let threadIdx = parseInt(e.target.value)
    let thread = threadArr[threadIdx]
    thread.upvotes += 1
    threadArr.sort((firstThread,secondThread) => secondThread.upvotes - firstThread.upvotes)
    this.setState({threadArr})
  }
  handleDownvote(e){
    let threadArr = this.state.threadArr.slice()
    let threadIdx = parseInt(e.target.value)
    let thread = threadArr[threadIdx]
    thread.upvotes -= 1
    threadArr.sort((firstThread,secondThread) => secondThread.upvotes - firstThread.upvotes)
    this.setState({threadArr})
  }

  render() {
    return (
      <div>
        <Title numThreads={this.state.threadArr.length} />
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.currTitle}/>
        <ol>
          {this.state.threadArr.map((thread, idx) => <Thread key={idx} title={thread.title} upvotes={thread.upvotes} index={idx} onUpvote={this.handleUpvote} onDownvote={this.handleDownvote} onDestroy={this.handleDestroy}/>) }
        </ol>
      </div>
    );
  }
}


render(<Forum />, document.querySelector(".container"))
