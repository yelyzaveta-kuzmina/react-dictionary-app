import React from 'react';
import deRuDict from '../../dictionaries/de-ru';
import ruDeDict from '../../dictionaries/ru-de';
import SuggestedWords from '../suggested-words';
import DictionaryApp from '../dictionary-app';
import styles from './styles.module.scss';

const ENTER_KEY_CODE = 13;

class App extends React.Component {

  state = { inputText: '', wordToTranslate: 'hund', suggestedWord: '' };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({ inputText: value })
  };

  checkTranslation = (event) => {
    this.setState({ wordToTranslate: this.state.inputText })
  };

  onKeyUp = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.checkTranslation();
    }
  };

  onWordChange = (word) => {
    this.setState({ inputText: word, wordToTranslate: word });
  };

  render () {
    const { wordToTranslate } = this.state;

    return(
      <div className={styles.app}>
        <div className={styles.dictionaryContainer}>
          <div className={styles.wordInputContainer}>
            <input
              className={styles.wordInput}
              spellCheck={false}
              placeholder="Word to translate"
              value={this.state.inputText}
              onKeyUp={this.onKeyUp}
              onChange={this.onChange} />
              &emsp;
            <button onClick={this.checkTranslation}>Check translation</button>
          </div>
          <DictionaryApp
            className={styles.dictionary}
            word={wordToTranslate}
            onWordChange={this.onWordChange}/>
        </div>

        <div className={styles.right}>
          <SuggestedWords
            dictionary={deRuDict}
            wordToExclude={wordToTranslate}
            onWordChange={this.onWordChange} />

          <SuggestedWords
            dictionary={ruDeDict}
            wordToExclude={wordToTranslate}
            onWordChange={this.onWordChange} />
        </div>
      </div>
    )
  }
};

export default App;