import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';

import './Banner.css';

function Banner() {
  return (
    <section className='banner'>
      <Promo />
      <NavTab />
    </section>
  );
}

export default Banner;
