import React from "react";
import { Node } from "../../types/filePathPicker";
import styles from "./NodeItem.module.css";
import PathWithIcon from "../PathWithIcon/PathWithIcon";

interface NodeItemProps {
  node: Node;
  isActive?: boolean;
  onNodeClick?: () => void;
}

const NodeItem: React.FC<NodeItemProps> = ({ node, isActive, onNodeClick }) => {
  const type = node.type === "folder" ? (isActive ? "folderOpened" : "folder") : "file";

  return (
    <div
      className={`${styles.nodeItem} ${styles[node.type]} ${isActive ? styles.active : ""}`}
      {...(onNodeClick ? { onClick: onNodeClick } : {})}
    >
      <PathWithIcon type={type} text={node.path} />
    </div>
  );
};

export default NodeItem;
