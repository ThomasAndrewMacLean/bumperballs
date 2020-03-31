import React, { useContext } from 'react';
import marked from 'marked';
import { TranslationContext } from '../pages/_app';

const Translation = ({ id }) => {
  const translationsFromContext = useContext(TranslationContext);
  const translation = translationsFromContext.find(t => t.id === id);
  return (
    <span dangerouslySetInnerHTML={{ __html: marked(translation.NL) }}></span>
  );
};

export default Translation;
