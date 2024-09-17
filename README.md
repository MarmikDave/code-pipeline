# Pipeline Builder

## Description
Pipeline Builder is a web application that allows users to create and manage data processing pipelines using a drag-and-drop interface. Users can add various types of nodes, connect them, and visualize the flow of data through the pipeline.

## Features
- Drag-and-drop functionality for adding nodes to the pipeline.
- Support for various node types including Input, LLM, Output, Text, Image Processing, Data Filter, Math Operation, Translation, and Sentiment Analysis.
- Real-time updates to the pipeline structure.
- Backend API to parse and validate the pipeline structure.

## Technologies Used
- **Frontend**: React, React Flow, Zustand
- **Backend**: FastAPI, NetworkX
- **Styling**: Styled Components

## Installation

### Prerequisites
- Node.js (v14 or later)
- Python (v3.7 or later)

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory (create it if it doesn't exist):
   ```bash
   cd backend
   ```
2. Install FastAPI and NetworkX:
   ```bash
   pip install fastapi[all] networkx
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the application.
- Use the toolbar to drag and drop nodes onto the canvas.
- Connect nodes to define the data flow.
- Submit the pipeline for processing.


## Acknowledgments
- [React Flow](https://reactflow.dev/) for the visualization library.
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework.
- [Zustand](https://github.com/pmndrs/zustand) for state management.
