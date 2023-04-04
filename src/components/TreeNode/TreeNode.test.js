import { render, screen } from '@testing-library/react';

import TreeNode from './index';
import treeData from '../../data/treeData.json';

describe('TreeNode', () => {
  const node = treeData[0];

  test('renders a FolderNode if isFolder is true', () => {
    render(<TreeNode node={node} />);
    const folderNode = screen.getByTestId('folder-node');
    expect(folderNode).toBeInTheDocument();
  });

  test('renders a FileNode if isFolder is false', () => {
    const fileNodeData = { ...node, isFolder: false };
    render(<TreeNode node={fileNodeData} />);
    const fileNode = screen.getByTestId('file-node')
    expect(fileNode).toBeInTheDocument();
  });
});
