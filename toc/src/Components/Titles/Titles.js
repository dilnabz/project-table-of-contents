import React from "react";
import { TitleItem } from "./TitleItem/TitleItem";

export function Titles({entities, ids}) {
    if (ids === undefined) {
        return null;
    }
    return (
        <ul>
            {ids.map(id => {
                return (
                    <li> 
                        <TitleItem entities={entities} id = {id}/>
                    </li>
                );
            })}
        </ul>
    );
}
