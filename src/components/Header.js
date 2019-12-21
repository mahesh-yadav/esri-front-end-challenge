import React, { useState } from 'react';

function Header(props) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    props.handleSearch(searchValue);
    setSearchValue('');
  }

  function onChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleSuggestion(e) {
    let value = e.target.innerText;
    props.handleSearch(value);
    setSearchValue('');
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          onChange={onChangeSearch}
          placeholder='Search by recipient'
          value={searchValue}
        ></input>
      </form>
      <div>
        <ul>
          {props.searchSuggestions.map((value) => {
            return (
              <li key={value} onClick={handleSuggestion}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
