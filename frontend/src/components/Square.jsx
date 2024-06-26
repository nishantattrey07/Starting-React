import PropTypes from 'prop-types';

export function Square({value}) {
    return (
        <div>
            <button type="button" className="square">{value}</button>
        </div>
    )
}

Square.propTypes = {
    value: PropTypes.string.isRequired
};



