import React, { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DataFilterNode = ({ id, data }) => {
  const [filterCondition, setFilterCondition] = useState(data?.filterCondition || '');

  const handleFilterChange = (e) => setFilterCondition(e.target.value);

  return (
    <BaseNode id={id} type="Data Filter" inputs={['data_in']} outputs={['filtered_data']}>
      <div>
        <label>
          Filter Condition:
          <input type="text" value={filterCondition} onChange={handleFilterChange} placeholder="e.g., x > 10" />
        </label>
      </div>
    </BaseNode>
  );
}