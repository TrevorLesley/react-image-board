import Component from 'react';

class ImageBoard extends Component{
    
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      counter: 4,
    }

  }
    
    
    render() {
      return(
        <div>
          <ImageForm />
          <ImageList />
        </div>
      )
    }
};

export default ImageBoard;