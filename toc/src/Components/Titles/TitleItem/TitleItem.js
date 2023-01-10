import React, {useState} from "react";

export function TitleItem({entities, id}) {
    const { title, pages } = entities.pages[id];
    return (
        <li> 
            {pages !== undefined && (
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '↑' : '↑'}
                </button>
            )}
            {title}
            {isOpen && <Titles
                entities={entities}
                ids={pages}
            />}
        </li>
    );
}