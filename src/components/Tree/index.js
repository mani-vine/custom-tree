import PropTypes from 'prop-types';

import TreeNode from "../TreeNode";
import TreeNodeType from "../../propTypes/treeNode";
import './Tree.css';

const Tree = ({ treeData }) => {

    return <div className="tree" data-testid="tree">
        {
            treeData?.map(node => <TreeNode key={node.id} node={node} />)
        }
    </div>;
}

Tree.propTypes = {
    treeData: PropTypes.arrayOf(TreeNodeType).isRequired
};

export default Tree;
