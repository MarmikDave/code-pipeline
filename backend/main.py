from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from networkx import DiGraph, is_directed_acyclic_graph

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: str = Form(...)):
    pipeline_data = json.loads(pipeline)
    nodes = pipeline_data['nodes']
    edges = pipeline_data['edges']

    # Create a directed graph
    G = DiGraph()
    G.add_nodes_from([node['id'] for node in nodes])
    G.add_edges_from([(edge['source'], edge['target']) for edge in edges])

    # Calculate the required information
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }