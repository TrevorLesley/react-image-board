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

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addImage({
      url: this.state.url,
      description: this.state.description,
    });
    this.setState({ url: '', description: '' });
  }
  
  render() {
    return (
      <>
        <ImageForm handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
        <ImageList images={this.state.images}/>
      </>
    )
  }
}


export default App;
