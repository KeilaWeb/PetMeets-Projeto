import React from 'react';
import '../../styles/components/_home.sass';
import heroImage from '../../img/petmeets-img.png'

export function Hero() {
  return (
    <div className="st-container">
      <div className="content-wrapper-hero">
        <div className="title-container">
          <h1 className="color-blue paddin-bottom-40">A Solução da sua Clínica Veterinária</h1>
          <h3 className="color-dark-blue text-container paddin-bottom-40">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h3>
          <p></p>
          <button className="button">Saiba Mais</button>
        </div>
        <div className="image-hero">
          <img src={heroImage}  alt='Hero PetMeets'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
