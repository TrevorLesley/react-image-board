import { Component } from 'react';
import ImageList from './imagelist.js';
import ImageForm from './imageform.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      counter: 3,
    }


  }
  
  render() {
    return (
      <>
        <ImageList />
        <ImageForm/>
      </>
    )
  }
}


export default App;
