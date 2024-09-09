import React from 'react';
import { BaseNode } from './BaseNode';

export const SentimentAnalysisNode = ({ id }) => {
  return (
    <BaseNode id={id} type="Sentiment Analysis" inputs={['text']} outputs={['sentiment', 'confidence']}>
      <div>
        <span>Analyzes the sentiment of the input text.</span>
      </div>
    </BaseNode>
  );
}