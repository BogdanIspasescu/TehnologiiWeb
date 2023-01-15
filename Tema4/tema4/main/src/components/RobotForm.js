import React, { Component } from 'react';

class RobotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      mass: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      type: this.state.type,
      mass: this.state.mass,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          id="type"
          value={this.state.type}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="mass">Mass:</label>
        <input
          type="text"
          name="mass"
          id="mass"
          value={this.state.mass}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="add" />
      </form>
    );
  }
}

export default RobotForm;
