import { render, screen } from '@testing-library/react';

import FileNode from './index';

describe('FileNode component', () => {

    // This is a test case that checks if the name of the file is rendered correctly
    test('renders the name of the file', () => {
        const name = 'File 1';
        render(<FileNode name={name} />);
        const fileNode = screen.getByText(name);
        expect(fileNode).toBeInTheDocument();
    });

    // This is a test case that checks if the file icon is rendered correctly
    test('renders the file icon', () => {
        const name = 'File 2';
        render(<FileNode name={name} />);
        const icon = screen.getByAltText('file icon');
        expect(icon).toBeInTheDocument();
    });
});
