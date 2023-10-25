import React from 'react'
import './header.css'
import Dropdown from './dropdown';
import { useState } from 'react'

export default function Header() {
    const [searchValue, setSearchValue] = useState();

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

    function loginDropdown(){

    }

    return (
        <div id="header">
            <h2 id="title">Sam and Ellie Recipes</h2>
            <input id="searchbar" type="text" placeholder='Find Recipes' onKeyDown={(event) => handleKeyPress(event)} onChangeCapture={(event) => handleSearchValue(event)}></input>
            <button id="login" onClick={() => loginDropdown()}>Admin Login</button>
        </div>
    )
}
