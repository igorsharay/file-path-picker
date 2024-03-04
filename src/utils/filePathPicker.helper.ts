import { FilePickerNodes, Node, SelectedPath } from "../types/filePathPicker.d";

export const getFullPath = (path: SelectedPath, delimeter: string = "/"): string => {
  return path.join(delimeter);
};

const getNodeWithoutNesting = (node: Node) => ({
  ...node,
  ...(node?.children
    ? {
        children: node?.children?.map(cnode => ({ path: cnode.path, type: cnode.type })),
      }
    : {}),
});

export const getNodes = (rootNode: Node, path: SelectedPath) => {
  const openedNodes: FilePickerNodes = [];

  const goDeeper = (node: Node, currentPathIndex: number) => {
    openedNodes.push(getNodeWithoutNesting(node));

    if (currentPathIndex < path.length) {
      const childNode = node?.children?.find(node => node.path === path[currentPathIndex + 1]);
      childNode && goDeeper(childNode, currentPathIndex + 1);
    }
  };

  goDeeper(rootNode, 0);

  return openedNodes;
};
