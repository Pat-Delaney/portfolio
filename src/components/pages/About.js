import React from 'react';
import '../../styles/Section.css';
import '../../styles/About.css';
const styles = {
  textStyle:{
    textAlign: 'left',
    fontSize: '18px',
    borderRadius: '10%'
  },
  pictureStyle:{
    objectFit: 'cover',
    maxWidth: '300px',
    borderRadius: '50px',
    zIndex:'1',
  },
  titleStyle:{
    textAlign: 'center',
  },
  linkStyle:{
    background: 'none',
    color: 'transparent',
    display:'flex',
    flexDirection:'row',
  }
};

export default function AboutMe() {
  return (
    <div className='aboutMe animate'>
    <h2 style={styles.titleStyle}>About Me</h2>
    <img style={styles.pictureStyle} id="patrick_img" src={require('../assets/patrick.JPG')} alt="Headshot of Patrick Delaney"/>
    <p style={styles.textStyle}>My name is Patrick Delaney. I was born in Buenos Aires, Argentina, and grew up around the greater New York City area. I am interested in media production, coding and visual art. I have a professional background in commerical printing, including screen printing, digital UV, heatpress, and flexographic printing.</p><br/>
    <p style={styles.textStyle}>I am a dedicated and experienced full stack developer with a background in media and visual arts. My Bachelors Degree in Media and Visual Arts from the Evergreen State College and my Coding Bootcamp Certificate from the University of Washington inform my work in web design and development.</p><br/>
    <p style={styles.textStyle}> I am very engaged with learning the ways that technology can and does effect our everyday modern lives and how the next generation of programmers can create more powerful and accessable ways to connect people. I thrive in engaging and fast paced environments which challenge me. My history in production and manufacturing lends me a result focused approach which demands a high level of detail work.</p>
    
   
    </div>
  );
}
