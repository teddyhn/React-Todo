import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.item}
          name="item"
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;