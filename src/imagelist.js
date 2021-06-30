import { Component } from 'react';
import './App.css';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
    }
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

  render() {
    const imagelist = this.props.images.map((image) => (
      <li key={image.id}>
        <img src={image.url} />
        <p>{image.description}</p>
      </li>
    ));
    return (
      <ul>{imagelist}</ul>
    )
  }

}

export default ImageList;