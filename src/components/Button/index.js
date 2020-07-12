import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ func, name, className }) => {
    return (
        <button className={className} onClick={func} type="button">
            {name}
        </button>
    );
};

Button.propTypes = {
    func: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Button;
