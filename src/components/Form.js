import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
           Thread Title:
          <input type="text" value={this.props.value} onChange={this.props.onChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
