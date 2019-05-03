import React, { useState } from 'react';
import classNames from 'classnames';
import LinkButton from '../link-button';
import { Sentence } from '../sentence'; 
import { getTranslationDetails } from '../../utils/dictionary';
import ImageCard from '../image-card';
import styles from './styles.module.scss';

const DictionaryApp = ({ className, word, onWordChange }) => {
  const wordDetails = getTranslationDetails(word);
  const [ isImageShown, setIsImageShown ] = useState(false);

  const onIsImageShownToggle = () => {
    setIsImageShown(!isImageShown);
  };

  return (
    <div className={classNames(styles.dictionaryApp, className)}>
      {wordDetails && (
        <div>
          <div className={styles.mainTranslationSection}>
            <div className={styles.left}>
              <div className={styles.translationSection}>
                <h3>Translation</h3>
                <LinkButton onClick={() => onWordChange(wordDetails.translation)} >
                  {wordDetails.translation}
                </LinkButton>
                {wordDetails.plural && (
                  <span>&nbsp;({wordDetails.plural})</span>
                )}
                {wordDetails.imgQuery && (
                  <LinkButton onClick={onIsImageShownToggle}>
                    &nbsp;<i className="far fa-image" />
                  </LinkButton>
                )}
              </div>

              <div className={styles.translationSection}>
                <h3>Description</h3>
                {wordDetails.description}
              </div>
            </div>
            {isImageShown && (
              <ImageCard className={styles.imageCard} imageQuery={wordDetails.imgQuery} />
            )}
          </div>

          {wordDetails.expressions && (
            <div className={styles.translationSection}>
              <h3>Expressions</h3>
                <div>
                  <ul>
                    {wordDetails.expressions.map(sentence => (
                      <li key={sentence}>
                        <Sentence 
                          sentence={sentence}
                          onWordChange={onWordChange}
                          imgQuery={wordDetails.imgQuery}/>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          )}
        </div>
      )}

      {!wordDetails && word !== '' && (
        <div className={classNames('errorMessage', styles.noWordMessage)}>
          Sorry, we don't have such a word in our dictionary
        </div>
      )}
    </div>
  );
};

export default DictionaryApp;
