import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return <ul className='movies__elements'>{children}</ul>;
}

export default MoviesCardList;
