import { useState } from 'react';

import ChildrenNode from './ChildrenNode';
import expandMore from '../../assets/chevron-right.svg';
import collapse from '../../assets/chevron-down.svg';
import folder from '../../assets/folder.svg';
import folderNode from '../../propTypes/folderNode';
import './FolderNode.css';

const FolderNode = ({ children, name, id }) => {
    // useState hook to maintain the state of the expand/collapse functionality
    const [expand, setExpand] = useState(false);

    // Function to handle the onClick event for toggling expand/collapse
    const toggleNode = () => {
        setExpand((prev) => !prev);
    };

    return (<div data-testid="folder-node">
        <div className={"folder" + (!children?.length ? ' pl-27' : '')} onClick={toggleNode}>
            {children?.length ? <img data-testid={id + '-icon'} className='icon' src={expand ? collapse : expandMore} alt="expand/collapse icon" /> : null}
            <img className='icon' src={folder} alt="folder icon" />
            {name}
        </div>
        {expand && <ChildrenNode children={children} />}
    </div>
    );
};

FolderNode.propTypes = folderNode.isRequired

export default FolderNode;