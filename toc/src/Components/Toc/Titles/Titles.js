import React, {useState} from "react";

export function Titles({entities, ids}) {
    const [isOpen, setIsOpen] = useState(false)
    if (ids === undefined) {
        return null;
    }
    return (
        <ul>
            {ids.map(id => {
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
            })}
        </ul>
    );
}
