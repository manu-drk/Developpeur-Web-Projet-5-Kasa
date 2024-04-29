import React, { useState } from 'react';
import './Collapse.css'


function Collapse ({ title, content }) {
    const [open, setOpen] = useState(false)

    const handleToggle = e => {
        setOpen(!open)
    }
    return (
        <div className={`Collapse ${open && "open"}`}>
            <div className='Collapse_title' onClick={handleToggle}>{title} <i className="fa-solid fa-chevron-down"></i></div>
            <div className='Collapse_content'>{content}</div>
        </div>
    )
}


export default Collapse;