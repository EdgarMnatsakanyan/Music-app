import React from 'react';
import cl from './MySlecet.module.css';

const MySelect = ({options, value, setQuery}) => {
    return (
        <select
            value={value}
            onChange={event => setQuery(event.target.value)}
            className={cl.filterNameContainer}
        >
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;