import React, {useState} from "react";
import data from './HelpTOC.json';
import './Toc.css';
import './Titles/Titles.js'
import { Titles } from "./Titles/Titles.js";

export function Toc() {
    const {entities, topLevelIds} = data;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Titles entities={entities} ids={topLevelIds}/>
    );
}