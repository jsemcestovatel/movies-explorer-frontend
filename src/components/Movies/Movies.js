import './Movies.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import Footer from '../Footer/Footer';

import { initialCards } from '../../utils/initialCards';

function Movies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Search />
      <section className='movies'>
        <MoviesCardList>
          {initialCards.map((item) => (
            <MoviesCard
              key={item._id}
              card={item}
            />
          ))}
        </MoviesCardList>
        <More />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
