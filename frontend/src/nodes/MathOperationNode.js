import React, { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathOperationNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleOperationChange = (e) => setOperation(e.target.value);

  return (
    <BaseNode id={id} type="Math Operation" inputs={['input1', 'input2']} outputs={['result']}>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}