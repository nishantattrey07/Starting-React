
import PropTypes from 'prop-types';

export function Rendering({ products }) {
    const items = products.map(product =>
        <li
            key={product.id}
            style={{ color: product.isFruit ? 'red' : 'green' }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>
            {items}
        </ul>
    );

}

Rendering.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            isFruit: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired
}