import React from 'react'
import './header.css'
import Dropdown from './dropdown.js';
import { useState } from 'react'

export default function Header() {
    const [searchValue, setSearchValue] = useState();
    const [toggle, setToggle] = useState(true);

    function handleKeyPress(e){
        if (e.key === 'Enter'){
            search()
        }
    }

    function search(){
        console.log(searchValue)
    }

    function handleSearchValue(event){
        setSearchValue(event.target.value);
    }

    return (
        <div id="header">
            <h2 id="title">Sam and Ellie Recipes</h2>
            <input id="searchbar" type="text" placeholder='Find Recipes' onKeyDown={(event) => handleKeyPress(event)} onChangeCapture={(event) => handleSearchValue(event)}></input>
            <button id="login" onClick={() => (setToggle(!toggle))}>Login</button>
            <div>
            {toggle && (<Dropdown></Dropdown>)}
            </div>
        </div>
    )
}
