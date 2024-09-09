import React from 'react';
import styled from "styled-components";
import { BaseNode } from './BaseNode';

const LLMText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #444;
`;

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="LLM"
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div>
        <LLMText>LLM: This is Large Language Model Node.</LLMText>
      </div>
    </BaseNode>
  );
}