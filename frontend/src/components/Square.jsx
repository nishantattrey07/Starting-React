import PropTypes from 'prop-types';

export function Square({value,onSquareClick}) {
    return (
        <div>
            <button type="button" className="square" onClick={onSquareClick}>{value}</button>
        </div>
    )
}

Square.propTypes = {
    value: PropTypes.string,
    onSquareClick:PropTypes.func
};



