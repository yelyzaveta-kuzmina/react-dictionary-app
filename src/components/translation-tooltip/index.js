import React from 'react';
import Tooltip from '../tooltip';
import { getTranslation } from '../../utils/dictionary';

const TranslationTooltip = ({ word, children }) => (
  <Tooltip text={getTranslation(word)}>
    {children}
  </Tooltip>
);

export default TranslationTooltip;
