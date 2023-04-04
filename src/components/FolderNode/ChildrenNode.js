import PropTypes from 'prop-types';

import TreeNode from '../TreeNode/index';
import TreeNodeType from '../../propTypes/treeNode';

const ChildrenNode = ({ children }) => {

    // If children is not an array, return null.
    if (!Array.isArray(children)) {
        return null;
    }
    // If children is an array, render each child node using TreeNode component.
    return (
        <div className='children'>
            {children.map((child) => (
                <TreeNode key={child.id} node={child} />
            ))}
        </div>
    );
};

ChildrenNode.propTypes = {
    children: PropTypes.arrayOf(TreeNodeType).isRequired
};

export default ChildrenNode;