import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    margin-top: 80px;

@media (max-width: 575px) {
  margin-top: 60px
};
@media (min-width: 568px) and (max-width: 767px){
  margin-top: 0px

}
@media (min-width: 768px) and (max-width: 991px) {
  margin-top: 40px

}
@media (min-width: 992px) and (max-width: 1199px) {
}
`;



function IconsData() {
  return (
    <Icons>
        <Link to="/" className='IconsStyles'><img src='images/figma.svg' alt='kudakwashe sachirahwe' className='iconImage'/></Link>
        <Link to="/" className='IconsStyles'><img src='images/xd.svg' alt='kudakwashe sachirahwe' className='iconImage'/></Link>
        <Link to="/" className='IconsStyles'><img src='images/photoshop.svg' alt='kudakwashe sachirahwe' className='iconImage'/></Link>
    </Icons>
  )
}

export default IconsData