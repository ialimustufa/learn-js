import React, {useState} from 'react';

function SearchBar({onFormSubmit}){
    //UseState hook
    const [term, setTerm]=useState('');
    const onSubmit=(event)=>{
        event.preventDefault();
        onFormSubmit(term);
    };
    return(
        <form onSubmit={onSubmit}>
            <div className='search-bar'>
            <label>video search</label>
            <input
            type ='text'
            value={term}
            onChange={(e) =>setTerm(e.target.value)}
            />

        </div>
        </form>
        
    )
}
export default SearchBar;