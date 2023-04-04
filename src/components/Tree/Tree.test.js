import { render, screen } from '@testing-library/react';

import Tree from '../Tree';
import treeData from '../../data/treeData.json';

describe('Tree', () => {
  test('does not render TreeNode components when treeData is empty', () => {
    render(<Tree treeData={[]} />);
    const treeNodes = screen.queryByTestId('tree-node');
    expect(treeNodes).toBeNull();
  });

  test('renders TreeNode components for each node in treeData', () => {
    render(<Tree treeData={treeData} />);
    const nodes = screen.getAllByTestId('tree-node');
    expect(nodes).toHaveLength(2);
  });
});
