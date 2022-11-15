import SearchForm from '../SearchForm/SearchForm';
import SearchFilter from '../SearchFilter/SearchFilter';

import './Search.css';

function Search() {
  return (
    <section className='search'>
      <SearchForm />
      <SearchFilter />
      <div className='decoration'> </div>
    </section>
  );
}

export default Search;
