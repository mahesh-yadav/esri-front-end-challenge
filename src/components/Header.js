import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

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
    <div className={styles['header']}>
      <form onSubmit={handleSearch} className={styles['form-search']}>
        <input
          onChange={onChangeSearch}
          placeholder='Search by recipient'
          value={searchValue}
        ></input>
      </form>
      {searchValue.length > 0 && (
        <div className={styles['suggestions']}>
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
      )}
    </div>
  );
}

export default Header;
