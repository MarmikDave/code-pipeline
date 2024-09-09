import React, { useState, useEffect, useRef, useCallback } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [nodeWidth, setNodeWidth] = useState(200);
  const [nodeHeight, setNodeHeight] = useState(50);
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const extractVariables = useCallback((text) => {
    const regex = /{{(\s*[a-zA-Z_$][0-9a-zA-Z_$]*\s*)}}/g;
    const matches = text.match(regex) || [];
    return [...new Set(matches.map((match) => match.slice(2, -2).trim()))];
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      const lines = text.split("\n");
      const maxLineLength = Math.max(...lines.map((line) => line.length));
      const newWidth = Math.max(200, maxLineLength * 8 + 40);

      const newVariables = extractVariables(text);

      setNodeWidth(newWidth);
      setNodeHeight(textareaRef.current.scrollHeight + 30);
      setVariables(newVariables);

    }
  }, [text, extractVariables, id]);


  return (
    <BaseNode
      id={id}
      type="Text"
      outputs={["output"]}
      style={{ width: nodeWidth, height: nodeHeight, padding: "5px" }}
    >
      <div style={{ fontSize: "12px", marginBottom: "2px", color: "#000000" }}>
        Text Node: {id}
      </div>
      {variables.map((variable, index) => {
        const handleId = `${id}-input-${variable}`;
        return (
          <Handle
            key={handleId}
            type="target"
            position={Position.Left}
            id={handleId}
            style={{
              top: `${((index + 1) * 100) / (variables.length + 1)}%`,
              background: "#4a90e2",
            }}
          />
        );
      })}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        style={{
          width: "95%",
          height: "calc(100% - 20px)",
          resize: "none",
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid",
          borderRadius: "4px",
          outline: "none",
          fontFamily: "inherit",
          fontSize: "12px",
          padding: "2px",
          marginTop:"4px",
          overflow: "hidden",
        }}
        placeholder="Enter text here..Use {{variableName}} to define variables"
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ background: "#4a90e2" }}
      />
    </BaseNode>
  );
};
