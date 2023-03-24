import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Style.css';
import { HeroData } from './Data/HeroData';
import IconsData from './Data/IconsData'



export const Heroe = styled.div`
    background: url('images/Billboard.png');
    height: 100vh;
    width: auto;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 80px;

@media (max-width: 575px) {
  padding: 0 0 0 15px;
};
@media (min-width: 568px) and (max-width: 767px) {
  padding: 0 0 0 15px;
}
@media (min-width: 768px) and (max-width: 991px) {
  padding: 0 0 0 15px;

}
@media (min-width: 992px) and (max-width: 1199px) {
}
`;




function Billboard() {
  return (
    <Heroe>

      {HeroData.map((item, i) => {
        return (
          <div key={i} className={item.cName}>
            <h1>{item.title}</h1>
            <h1>{item.title2}</h1>
            <p className={item.ctext}>{item.text}</p>
            <Link to='contact-page' className={item.clinkText}>{item.linkText}</Link>
          </div>
        )
      })}
      <IconsData />

    </Heroe>

  )
}

export default Billboard;