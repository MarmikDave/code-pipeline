import React, { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TranslationNode = ({ id, data }) => {
  const [targetLanguage, setTargetLanguage] = useState(data?.targetLanguage || 'es');

  const handleLanguageChange = (e) => setTargetLanguage(e.target.value);

  return (
    <BaseNode id={id} type="Translation" inputs={['text']} outputs={['translated_text']}>
      <div>
        <label>
          Target Language:
          <select value={targetLanguage} onChange={handleLanguageChange}>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}