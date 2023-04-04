import { render, screen, fireEvent } from '@testing-library/react';

import TreeNode from '../TreeNode';
import treeData from '../../data/treeData.json';

describe('FolderNode', () => {
    const node = treeData[0];

    // Test that the component renders the folder name and icon
    test('renders the folder name and icon', () => {
        render(<TreeNode node={node} />);

        // Check that the folder name and icon are present in the document
        const folderName = screen.getByText(node.name);
        expect(folderName).toBeInTheDocument();
        const folderIcon = screen.getByAltText('folder icon');
        expect(folderIcon).toBeInTheDocument();
    });

    // Test that the component displays an expand/collapse icon if it has children
    test('displays expand/collapse icon if folder has children', () => {
        render(<TreeNode node={node} />);

        // Check that the expand/collapse icon is present in the document
        const expandIcon = screen.getByAltText('expand/collapse icon');
        expect(expandIcon).toBeInTheDocument();
    });

    // Test that the component displays children when the expand icon is clicked
    test('displays children when expand icon is clicked', () => {
        render(<TreeNode node={node} />);
        const expandIcon = screen.getByTestId(`${node.id}-icon`);
        fireEvent.click(expandIcon);

        // Find the first child of the node and check that it is now present in the document
        const childName = node['children'][0].name;
        const childNode = screen.getByText(childName);

        // Find the expand/collapse icon again and check that its state has changed to "expanded"
        const icon = screen.getByTestId(`${node.id}-icon`);
        expect(childNode).toBeInTheDocument();
        expect(icon.getAttribute('src')).toContain('chevron-down.svg');
    });

    // Test that the component hides children when the collapse icon is clicked
    test('hides children when collapse icon is clicked', () => {
        render(<TreeNode node={node} />);

        // Find and click the expand icon to show the child
        const expandIcon = screen.getByAltText('expand/collapse icon');
        fireEvent.click(expandIcon);

        // Find and click the expand icon again to hide the child
        fireEvent.click(expandIcon);

        // Find the first child of the node and check that it is no longer present in the document
        const childName = node['children'][0].name;
        const childNode = screen.queryByText(childName);
        expect(childNode).not.toBeInTheDocument();
    });

    // Test that the component does not render an expand icon if it does not have children
    test('Does not renders expand icon when folder does not have children', () => {
        const node = { id: 1, name: 'Folder 1', isFolder: true, children: null };
        render(<TreeNode node={node} />);

        // Check that the expand/collapse icon is not present in the document
        const icon = screen.queryByTestId(`${node.id}-icon`)
        expect(icon).not.toBeInTheDocument();
    });
});
