import React from "react";
import useScrollToElementView from "../../hooks/useScrollToElementView";
import { FilePickerNodes, Node, SelectedPath } from "../../types/filePathPicker.d";
import NodeItem from "../NodeItem/NodeItem";
import PathWithIcon from "../PathWithIcon/PathWithIcon";
import styles from "./FilePathPicker.module.css";

export interface FilePathPickerProps {
  nodes: FilePickerNodes;
  updateSelectedNodesPath: (path: SelectedPath) => void;
}

const FilePathPicker: React.FC<FilePathPickerProps> = ({ nodes, updateSelectedNodesPath }) => {
  const scrollRef = useScrollToElementView<HTMLDivElement>();

  const clickNodeHandler = (path: string, stopIndex: number) => {
    updateSelectedNodesPath([...nodes.slice(0, stopIndex).map(n => n.path), path]);
  };

  const getNodeAttributes = (nodes: FilePickerNodes, childNode: Node, index: number) => ({
    ...(index < nodes.length && nodes[index].path === childNode.path
      ? { isActive: true }
      : { onNodeClick: () => clickNodeHandler(childNode.path, index) }),
  });

  return (
    <div className={styles.container}>
      {nodes.map((node: Node, i: number) =>
        node.type === "folder" ? (
          <div key={`node_${i}`} className={styles.nodeColumn} {...(i === nodes.length - 1 ? { ref: scrollRef } : {})}>
            <div className={styles.nodeTitle}>
              <PathWithIcon type="folderOpened" text={node.path} />
            </div>

            <div className={styles.nodeContent}>
              {node?.children?.map((childNode, j) => (
                <NodeItem
                  key={`node_${i}_${childNode.path.replaceAll(" ", "_")}${j}`}
                  node={childNode}
                  {...getNodeAttributes(nodes, childNode, i + 1)}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FilePathPicker;
