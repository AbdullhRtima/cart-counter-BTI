import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CounterCell.css';

function CounterCell(props) {
    return (
        <div className='flex-container'>
            <p className={classNames({
                "green": props.count >= 8,
                "yellow": props.count >= 5 && props.count <= 7,
                "red": props.count < 5
            })}>
                {props.count}
            </p>
            <div className="flex-container">
                <button onClick={() => props.increment(props.id)}>+</button>
                <button disabled={props.count === 0} onClick={() => props.decrement(props.id)}>-</button>
            </div>
        </div>
    )
}


CounterCell.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default CounterCell;
