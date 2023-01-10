import React, {useState} from "react";
import data from './HelpTOC.json';
import './App.css';
import {Titles} from './Components/Titles/Titles'

export function App() {
  const {entities, topLevelIds} = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
      <Titles entities={entities} ids={topLevelIds}/>
  );
}
