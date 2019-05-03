import React from 'react';
import LinkButton from '../../components/link-button';
import { isWordInAnyDictionary } from '../../utils/dictionary';
import TranslationTooltip from '../translation-tooltip';
import styles from './styles.module.scss';

export const Sentence = ({ sentence, onWordChange, imgQuery }) => {
  const words = sentence.split(/[\s,.]+/)

  return (
    <div>
      {words.map((word, index) => {
        const isInDictionary = isWordInAnyDictionary(word);

        if (isInDictionary) {
          return (
            <LinkButton
              onClick={() => onWordChange(word)}
              className={styles.word}
              key={index}>
              <TranslationTooltip word={word}>
                {word}
              </TranslationTooltip>
            </LinkButton>
          );
        }

        return (
          <span className={styles.word} key={index}>
            {word}
          </span>
        );
      })}
    </div>
  )
};
