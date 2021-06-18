import { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({description: '', url: ''});
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="url" name="url" value={this.state.url} onChange={this.handleInput} placeholder="Image URL"/>
        <input type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Image Caption"/>
        <button type="submit">Add Image</button>
      </form>
    )
  }
};

export default ImageForm