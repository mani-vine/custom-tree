import FolderNode from "../FolderNode";
import FileNode from "../FileNode";
import TreeNodeType from "../../propTypes/treeNode";
import "./TreeNode.css";

const TreeNode = ({ node: { isFolder, children, name, id } }) => {
  return (
    <div data-testid="tree-node">
      {isFolder ? (
        <FolderNode children={children} name={name} id={id} />
      ) : (
        <FileNode name={name} />
      )}
    </div>
  );
};

TreeNode.propTypes = {
  node: TreeNodeType.isRequired,
};

export default TreeNode;
