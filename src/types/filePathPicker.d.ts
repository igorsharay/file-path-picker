export interface Node {
  path: string;
  type: string;
  children?: Array<Node>;
}

export type FilePickerNodes = Array<Node>;

export type SelectedPath = string[];
