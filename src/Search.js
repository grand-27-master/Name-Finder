import React from 'react';
import './index.css';

function Search()
{
    return(
        <div className="search"><input onChange={function(event){
            console.log(event.target.value);
        }} type="text" placeholder="Search"></input></div>
    );
}

export default Search;

