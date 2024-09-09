import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const BaseNode = ({ id, type, data, children, inputs = [], outputs = [] }) => {
  const removeNode = useStore(state => state.removeNode);

  const handleClose = () => {
    removeNode(id);
  };

  return (
    <div style={{
      width: 180,
      minHeight: 80,
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '10px',
      backgroundColor: '#ffffff',
      color: '#000000',
      position: 'relative',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#ff4d4f',
          color: '#ffffff',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        ×
      </button>
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{top: `${(index + 1) * 100 / (inputs.length + 1)}%`, background: '#0052cc'}}
        />
      ))}
      <div style={{marginBottom: '10px', fontWeight: 'bold', color: '#000000'}}>
        <span>{type}</span>
      </div>
      {children}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{top: `${(index + 1) * 100 / (outputs.length + 1)}%`, background: '#0052cc'}}
        />
      ))}
    </div>
  );
};