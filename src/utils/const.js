const BASEURL = 'https://api.movie.jc.nomoredomains.icu';
// const BASEURL = 'http://localhost:3000';
const MOVIESURL = 'https://api.nomoreparties.co/beatfilm-movies';

// длительность Короткометражки
const SHORTTIME = 40;

// Ширина 1280px — 12 карточек по 3 в ряд. Кнопка «Ещё» загружает по 3 карточки.
  // Ширина 768px — 8 карточек по 2 в ряд. Кнопка «Ещё» загружает по 2 карточки.
  // Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.

const LARGESCREEN = 1280;
const MIDDLESCREEN = 768;
const SMALLSCREEN = 480;

const DEFAULTONLARGESCREEN = 12;
const DEFAULTONMIDDLESCREEN = 8;
const DEFAULTONSMALLSCREEN = 5;

const INCREASEONLARGESCREEN = 3;
const INCREASEONMIDDLESCREEN = 2;
const INCREASEONSMALLSCREEN = 2;

export {
  BASEURL,
  MOVIESURL,
  SHORTTIME,
  LARGESCREEN,
  MIDDLESCREEN,
  SMALLSCREEN,
  DEFAULTONLARGESCREEN,
  DEFAULTONMIDDLESCREEN,
  DEFAULTONSMALLSCREEN,
  INCREASEONLARGESCREEN,
  INCREASEONMIDDLESCREEN,
  INCREASEONSMALLSCREEN,
};
