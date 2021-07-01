import { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addImage(this.state);
    this.setState({ url: '', description: '' });
  }


  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='url' placeholder='URL' value={this.state.url} onChange={this.handleInput}/>
        <input type='text' name='description' placeholder='Description' value={this.state.description} onChange={this.handleInput}/>
        <button type='submit'>Submit Image</button>
      </form>
    )
  }
}

export default ImageForm;