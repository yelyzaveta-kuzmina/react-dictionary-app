import React from 'react';
import classNames from 'classnames';
import unsplash from '../../api/unsplash';
import Spinner from '../spinner';
import styles from './styles.module.scss';

class ImageCard extends React.Component {
  state = { 
    image: null,
    loading: true
  };

  onShowUnsplashImg = async (imageQuery) => {
    this.setState({
      loading: true,
      image: null
    });
    const response = await unsplash.get('/search/photos', {
      params: { query: imageQuery }
    });

    this.setState({ 
      image: response.data.results[0]
    });
  };

  onImageLoaded = () => {
    this.setState({
      loading: false
    });
  };

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
    const { image, loading } = this.state;
    const { className } = this.props;

    return (
      <div className={classNames(className, styles.imageCard)}>
        {loading && (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
        {image && (
          <img
            key={image.id}
            alt={''}
            src={image.urls.regular}
            onLoad={this.onImageLoaded} />
        )}
      </div>
    );
  }
};

export default ImageCard;
