import ruDeDict from '../dictionaries/ru-de';
import deRuDict from '../dictionaries/de-ru';

export const isWordInAnyDictionary = (word) => {
  const lowerCaseWord = word.toLowerCase();

  return isWordInDictionary(lowerCaseWord, ruDeDict) ||
    isWordInDictionary(lowerCaseWord, deRuDict);
};

const isWordInDictionary = (word, dictionary) => word in dictionary;

export const getTranslationDetails = (word) => {
  const lowercaseWord = word.toLowerCase();
  return ruDeDict[lowercaseWord] || deRuDict[lowercaseWord]
};

export const getTranslation = (word) => {
  return getTranslationDetails(word).translation;
};
