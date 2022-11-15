import './AboutMeContent.css';
import aboutmeimage from '../../images/AboutMe.jpg';

function AboutMeContent() {
  return (
    <div className='aboutme'>
      <div className='aboutme__description'>
        <h3 className='aboutme__name'>Анатолий</h3>
        <p className='aboutme__status'>
          Студент Яндекс.Практикум и фрилансер, 40 лет
        </p>
        <p className='aboutme__text'>
          Я родился в Перми, закончил аэрокосмический факультет ПГТИ. Я люблю
          слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2004
          года работал в компании «Евросеть». После того, как прошёл курс по
          веб-разработке, начал дополнительно заниматься фриланс-заказами.
        </p>
        <a
          className='aboutme__link link'
          href='https://github.com/jsemcestovatel'
          target='_blank'
          rel='noreferrer'
        >
          Facebook
        </a>
        <a
          className='aboutme__link link'
          href='https://github.com/jsemcestovatel'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
      <img className='aboutme__image' src={aboutmeimage} alt='Моё фото' />
    </div>
  );
}

export default AboutMeContent;
