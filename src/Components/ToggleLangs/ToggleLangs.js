import React, {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import Englishlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';
import {Context} from '../../context/LangContext';

export default function ToggleLangs() {

    const {toggleLang} = useContext(Context);

    return (
        <div className='container-langs'>
            <img onClick={() => toggleLang('FR')} src={FrenchFlag} />
            <img onClick={() => toggleLang('EN')} src={Englishlag} />
            <img onClick={() => toggleLang('ES')} src={SpanishFlag} />
        </div>
    );
};