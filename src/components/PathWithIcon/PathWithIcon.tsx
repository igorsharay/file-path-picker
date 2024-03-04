import React from "react";
import { ReactComponent as FileIcon } from "../../assets/images/file_icon.svg";
import { ReactComponent as FolderIcon } from "../../assets/images/folder_icon.svg";
import { ReactComponent as FolderOpenedIcon } from "../../assets/images/folder_opened_icon.svg";

interface PathWithIconProps {
  type: "folder" | "folderOpened" | "file";
  text: string;
}

const icons = {
  folder: FolderIcon,
  folderOpened: FolderOpenedIcon,
  file: FileIcon,
};

const PathWithIcon: React.FC<PathWithIconProps> = ({ type, text }) => {
  const Icon = icons[type];
  return (
    <>
      <Icon />
      <span>{text}</span>
    </>
  );
};

export default PathWithIcon;
