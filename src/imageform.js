import { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: '',
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='url' placeholder='URL' onChange={this.props.handleInput}/>
        <input type='text' name='description' placeholder='Description' onChange={this.props.handleInput}/>
        <button type='submit'>Submit Image</button>
      </form>
    )
  }
}

export default ImageForm;