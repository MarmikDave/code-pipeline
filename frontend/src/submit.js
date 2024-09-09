import React from "react";
import axios from "axios";
import { useReactFlow } from "reactflow";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();
    const pipeline = JSON.stringify({ nodes, edges });

    try {
      const formData = new FormData();
      formData.append("pipeline", pipeline);

      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { num_nodes, num_edges, is_dag } = response.data;
      const alertMessage = `
                Pipeline Analysis:
                Number of nodes: ${num_nodes}
                Number of edges: ${num_edges}
                Is a Directed Acyclic Graph (DAG): ${is_dag ? "Yes" : "No"}
            `;

      alert(alertMessage);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Error submitting pipeline. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#16213e",
        borderTop: "1px solid #0f3460",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#0052cc",
          color: "#ffffff",
          border: "none",
          borderRadius: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "17px",
          transition: "background-color 0.3s, box-shadow 0.3s",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onMouseOver={(e) =>
          (e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.5)")
        }
        onMouseOut={(e) =>
          (e.target.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)")
        }
      >
        Submit Pipeline
      </button>
    </div>
  );
};
