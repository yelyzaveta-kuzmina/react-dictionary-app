import React from 'react';
import unsplash from '../../api/unsplash';

class ImageCard extends React.Component {
  state = { 
    image: null,
  };

  onShowUnsplashImg = async (imageQuery) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: imageQuery }
    });

    this.setState({ 
      image: response.data.results[0]
     });
  }

  componentDidMount() {
    const { imageQuery } = this.props;
    this.onShowUnsplashImg(imageQuery);
  }

  componentDidUpdate(prevProps) {
    const { imageQuery } = this.props;
    if (imageQuery !== prevProps.imageQuery) {
      this.onShowUnsplashImg(imageQuery);
    }
  }

  render () {
    const { image } = this.state;
    const { className } = this.props;

    if (!image) {
      return null;
    }

    return (
      <div className={className}>
        <img key={image.id} alt={''} src={image.urls.regular} />
      </div>
    );
  }
};

export default ImageCard;
