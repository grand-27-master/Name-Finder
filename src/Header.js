import React from 'react';
import Search from './Search';

class Header extends React.Component
{

        onHandleChange=(input)=>{
           console.log(input);
        };


   
    render(){
    return(<div><h1 className="title">Name{' -> '}Finder</h1>
    <Search inputChange={this.onHandleChange}></Search>
    </div>);
    }
}

export default Header;