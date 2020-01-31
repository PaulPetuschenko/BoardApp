import React from 'react';

function cardSpace (props) {
    const dragOver = e => {
        e.preventDefault();
        if (e.target.className != "board")
            e.dataTransfer.dropEffect = "none";
        else
            e.dataTransfer.dropEffect = "all";
    } 

    return(
        <div 
            id={props.id} 
            className={props.className}
            onDrop={props.onDrop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
    
}

export default cardSpace