import React, {useState} from "react";
import {Titles} from '../Titles';

export function TitleItem({entities, id}) {
    const [isOpen, setIsOpen] = useState(false)
    const { title, pages } = entities.pages[id];
    return (
        <li> 
            {pages !== undefined && (
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '↑' : '↓'}
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