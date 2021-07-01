import { Component } from 'react';
import './App.css';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      images: [],
    }
  }
  

  render() {
    const images = this.props.images.map((image) => (
      <li key={image.id}>
        <img src={image.url} alt=''/>
        <p>{image.description}</p>
      </li>
    ));
    return (
      <ul className='imagelist'>{images}</ul>
    )
  }

}

export default ImageList;
