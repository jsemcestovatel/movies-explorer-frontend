import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './Filter.css';

function Filter() {
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

export default Filter;
