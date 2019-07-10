import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = (props) => {

    //States
    const [value, setValue] = useState('');

    //Props
    const { onChange, children } = props;

    const handleOnChange = (event, onChange) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }

    return (
        <select
            onChange={(event) => handleOnChange(event, onChange)}
            className={styles.select}>
            {children}
        </select>
    );
};

// Props
Select.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ])
};

export default Select;

/*  Test children

    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
*/