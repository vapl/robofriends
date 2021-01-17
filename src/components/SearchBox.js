import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
            <div className="center measure pa4 black-80">
                <input 
                    id="name" 
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" 
                    type="search"
                    placeholder='Search Robots'
                    onChange={searchChange}
                />
            </div>
        
    );
}

export default SearchBox;