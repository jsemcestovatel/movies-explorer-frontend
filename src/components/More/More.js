import './More.css';

function More({ onLoadMore }) {
  return (
    <button className='movies__button button link' onClick={onLoadMore}>
      Ещё
    </button>
  );
}

export default More;
