import React, { useState } from "react";
import FilePathPicker from "./components/FilePathPicker/FilePathPicker";
import { Node, SelectedPath } from "./types/filePathPicker.d";
import { getFullPath, getNodes } from "./utils/filePathPicker.helper";

const App: React.FC<{ filesData: Node }> = ({ filesData }) => {
  const [selectedNodesPath, setSelectedNodes] = useState<SelectedPath>([]);
  const [path, setPath] = useState("");

  return (
    <div className="componentContainer">
      <FilePathPicker
        nodes={getNodes(filesData, selectedNodesPath)}
        updateSelectedNodesPath={(path: SelectedPath) => setSelectedNodes(path)}
      />

      <button
        className="selectBtn"
        onClick={() => setPath(getFullPath(selectedNodesPath))}
        {...(selectedNodesPath.length === 0 ? { disabled: true } : {})}
      >
        Select
      </button>

      {path && <p className="selectedPath">{path}</p>}
    </div>
  );
};

export default App;
