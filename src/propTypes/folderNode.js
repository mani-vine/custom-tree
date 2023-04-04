import PropTypes from 'prop-types';

const folderNode = PropTypes.shape({
    children: PropTypes.array,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
});

export default folderNode;