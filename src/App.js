import { Component } from 'react';
import ImageList from './imagelist.js';
import ImageForm from './imageform.js';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      counter: 3,
    }


    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    const images = [
      {
        id: 1,
        url: 'https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/legend-of-korra/characters/pabu-character-web-desktop.png?height=0&width=480&matte=true&crop=false',
        description: 'Pabu',
      },
      {
        id: 2,
        url: 'http://pm1.narvii.com/6488/7d707b274a7cba4df7db209da0c6abfc31cd7fff_00.jpg',
        description: 'Naga',
      },
      {
        id: 3,
        url: 'https://imgix.bustle.com/uploads/image/2020/12/29/dc2a8521-674e-44af-8fb8-243fc5c65a03-momo-avatar.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
        description: 'Momo',
      },
    ]

    this.setState({ images });
  }

  


  addImage(image){
    image.id = this.state.counter;
    const images = [ ...this.state.images, image ];
    this.setState({ images, counter: this.state.counter + 1 });

  }
  
  render() {
    return (
      <>
        <ImageForm images={this.state.images} handleInput={this.handleInput} handleSubmit={this.handleSubmit} addImage={this.addImage}/>
        <ImageList images={this.state.images}/>
      </>
    )
  }
}


export default App;
