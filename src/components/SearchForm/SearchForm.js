import './SearchForm.css';

function SearchForm() {
  return (
      <form className='search__form'>
        <input
          type='text'
          id='search-form'
          name='search-form'
          encType='text/plain'
          placeholder='Фильм'
          className='search__input'
          required
        />
        <button type='submit' className='button search__button link'></button>
      </form>
  );
}

export default SearchForm;
