import { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  handleSubmit() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='url'>Image URL</input>
        <input type='text' name='description'>Photo Description</input>
      </form>
    )
  }
}

export default ImageForm;