import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1C2536",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h2 style={{ margin: "0 0 15px 0", color: "#0052cc" }}>Pipeline Nodes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="imageProcessing" label="Image" />
        <DraggableNode type="dataFilter" label="Data Filter" />
        <DraggableNode type="mathOperation" label="Math Operation" />
        <DraggableNode type="translation" label="Translation" />
        <DraggableNode type="sentimentAnalysis" label="Analysis" />
      </div>
    </div>
  );
};
