import React, { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ImageProcessingNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'resize');

  const handleOperationChange = (e) => setOperation(e.target.value);

  return (
    <BaseNode id={id} type="Image Processing" inputs={['image']} outputs={['processed_image']}>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="resize">Resize</option>
            <option value="crop">Crop</option>
            <option value="rotate">Rotate</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}