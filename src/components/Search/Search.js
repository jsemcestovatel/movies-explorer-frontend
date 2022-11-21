import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import SearchFilter from '../SearchFilter/SearchFilter';

import './Search.css';

function Search({ searchMovie, onIsShort, isShort }) {
  const location = useLocation();
  const [searchText, setSearchText] = React.useState(
    localStorage.getItem('searchText') || '',
  );

  const allMoviesPage = location.pathname === '/movies';

  function handleSubmit(evt) {
    evt.preventDefault();
    searchMovie(searchText);
    if (allMoviesPage) {
      localStorage.setItem('searchText', evt.target.search.value);
    }
  }

  function handleChange(evt) {
    setSearchText(evt.target.value);
  }

  return (
    <section className='search'>
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={searchText}
      />
      <SearchFilter onIsShort={onIsShort} isShort={isShort} />
      <div className='decoration'> </div>
    </section>
  );
}

export default Search;
