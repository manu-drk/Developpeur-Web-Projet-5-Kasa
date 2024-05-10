import React, { useState } from 'react';
import './Collapse.scss';
import flechUp from '../../assets/flech-up.png';
// import flechDown from '../../assets/flech-down.png';

function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className='Collapse-container'>
        <div className={`Collapse ${open ? "open" : ""}`}>
            <div className='Collapse_title' onClick={handleToggle}>
                <h2>{title}</h2>
                <img src={flechUp} alt={open ? "Up" : "Down"} className={open ? "Collapse_title_img rotate" : "Collapse_title_img"} />
            </div>
            {/* <div className='Collapse_content'>
            {open && <p>{content}</p>}</div>
        </div> */}
        <div className='Collapse_content'>
                    {open && (
                        Array.isArray(content) ? (
                            <ul>
                                {content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{content}</p>
                        )
                    )}
                </div>
        </div>
        </div>
    );
}

export default Collapse;











// import React, { useState } from 'react';
// import './Collapse.css'


// function Collapse ({ title, content, id }) {
//     const [open, setOpen] = useState(false)

//     const handleToggle = e => {
//         setOpen(!open)
//     }
//     return (
//         <div className={`Collapse ${open && "open"}`}>
//             <div className='Collapse_title' onClick={handleToggle}>{title} <i className="fa-solid fa-chevron-down"></i></div>
//             <div className='Collapse_content'>{content}</div>
//         </div>
//     )
// }


// export default Collapse;