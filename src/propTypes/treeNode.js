import PropTypes from 'prop-types';

const nodeShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired
});
nodeShape.children = PropTypes.arrayOf(nodeShape);

export default nodeShape;