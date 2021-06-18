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
        this.addImage = this.addImage.bind(this);
      }
        
      componentDidMount() {
        const images = [
          { id: 1,
            url: 'https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/legend-of-korra/characters/pabu-character-web-desktop.png?height=0&width=480&matte=true&crop=false',
            description: 'Image 1'
          },
          { id: 2,
            url: 'http://pm1.narvii.com/6488/7d707b274a7cba4df7db209da0c6abfc31cd7fff_00.jpg',
            description: 'Image 2'
          }
        ];
    
        this.setState({ images });
      }
    
      addImage(image) {
        image.id = this.state.counter;
        const images = [ ...this.state.images ]; // creates a shallow copy of images
        images.push(image); // pushes new image into images array
        // this.setState({ images });
        this.setState((state) => ({ images, counter: state.counter + 1 })); // re-render to update images and the counter
      }
        
        render() {
          return(
            <div>
                  <ImageForm addImage={this.addImage}/>
                  <ImageList images={this.state.images}/>
            </div>
          )
        }
}


export default App;
