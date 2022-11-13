import Title from '../Title/Title';
import SectionBlock from '../SectionBlock/SectionBlock';
import TechsContent from '../TechsContent/TechsContent';
import './Techs.css';

function Techs() {
  return (
    <SectionBlock type={'grey'} link={'techs'}>
      <Title title={'Технологии'} />
      <TechsContent />
    </SectionBlock>
  );
}

export default Techs;
