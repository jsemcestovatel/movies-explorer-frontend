import './Burger.css';

function Burger({ isOpen, onClick }) {
  return (
    <>
      {/* {isOpen && ( */}
        <button
          className={isOpen ? 'header__burger button link hidden' : 'header__burger button link'}
          onClick={onClick}
        ></button>
      {/* )} */}
    </>
  );
}

export default Burger;
