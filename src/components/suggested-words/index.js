import React from 'react';
import LinkButton from '../link-button';
import { shuffle } from 'lodash-es';
import { Transition, animated } from 'react-spring/renderprops';
import styles from './styles.module.scss';

class SuggestedWords extends React.Component {
  static defaultProps = {
    count: 4
  };

  state = {
    words: []
  };

  componentDidMount() {
    this.showRandomizedWords();
    setInterval(this.showRandomizedWords, 3000);
  }

  showRandomizedWords = () => {
    const { wordToExclude, dictionary, count } = this.props;
    const wordsToTranslation = Object.keys(dictionary);
    const filteredWords = wordsToTranslation.filter((word) => word !== wordToExclude);
    const updatedWords = shuffle(filteredWords).slice(0, count);
    this.setState({ words: updatedWords });
  };

  render() {
    const { words } = this.state;
    const { onWordChange } = this.props;

    return (
      <div className={styles.suggestedWords}>
        <h3>Suggested words</h3>
          <ul style={{ overflow: 'hidden' }}>
            <Transition
              config={{
                duration: 200
              }}
              items={words}
              from={{ top: 20, position: 'relative', opacity: 1 }}
              enter={{ top: 0 }}
              leave={{ height: 0, top: -20, opacity: 0 }}>
              {word => props => (
                <animated.div key={word} style={props}>
                  <li>
                    <LinkButton onClick={() => onWordChange(word)}>
                      {word}
                    </LinkButton>
                  </li>
                </animated.div>
              )}
            </Transition>
          </ul>
       </div>
    );
  }
};

export default SuggestedWords;
