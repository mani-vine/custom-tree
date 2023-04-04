import file from '../../assets/file.svg';
import fileNode from '../../propTypes/fileNode';
import './FileNode.css'

const FileNode = ({ name }) => {

    // Returns the FileNode with name and file icon
    return <div data-testid="file-node" className='file-container'>
        <span className='file'>
            <img className='icon' src={file} alt="file icon" />
            {name}
        </span>
    </div>
}

FileNode.propTypes = fileNode.isRequired;

export default FileNode;