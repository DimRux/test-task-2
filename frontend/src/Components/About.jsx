import { ReactComponent as BeansLogoBlack } from '../images/BeansLogoBlack.svg';

const About = ({ img, head, text, textPosition }) => {
  const classText = textPosition ? `aboute-card-text ${textPosition}` : 'aboute-card-text';

  return (
    <div className='about-container'>
      <div className='about-flex-container'>
        <div>
          <img src={img} alt='card images' />
        </div>
        <div className='about-text-container'>
          <h2 className='about-card-head align-self-center'>{head}</h2>
          <BeansLogoBlack className='align-self-center'/>
          <p className={classText}>{text}</p>
        </div>
      </div>
    </div>
  )
};

export default About;
