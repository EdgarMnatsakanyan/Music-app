import React, { useState } from 'react';
import cl from './FilterSection.module.css';
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const FilterSection = () => {
    const [dropDown, setDropDown] = useState(false)
   


    const selector = () => {
        setDropDown(!dropDown)
    }

    return (
        <div onClick={selector} className={cl.container}>
            <TbArrowsSort />
            <div className={cl.filterNameContainer} onClick={() => setDropDown(false)}>
                <p className={cl.filterTitle}>Track Number</p>
            </div>
        </div>
    );
};

export default FilterSection;