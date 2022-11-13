import SearchForm from '../SearchForm/SearchForm';
import Filter from '../Filter/Filter';

import './Search.css';

function Search() {
  return (
    <section className='search'>
      <SearchForm />
      <Filter />
      <div className='decoration'> </div>
    </section>
  );
}

export default Search;
