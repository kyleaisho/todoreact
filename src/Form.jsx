import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    this.props.handleSubmit(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="Add a task..." value={value} />
      </form>
    );
  }
}

export default Form;
