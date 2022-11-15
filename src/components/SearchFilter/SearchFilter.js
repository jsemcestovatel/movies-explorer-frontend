import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './SearchFilter.css';

function SearchFilter() {
  const [check, setCheck] = React.useState(true);

  return (
    <div className='search__filter'>
      <ToggleSwitch
        status={check}
        onColor='var(--color-green)'
        handleToggleClick={() => setCheck(!check)}
        name={'Короткометражки'}
      />
    </div>
  );
}

export default SearchFilter;
