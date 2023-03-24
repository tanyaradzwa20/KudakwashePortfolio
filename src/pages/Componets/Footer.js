import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';


const GlobalFooter = styled.div`
    text-align: center;
    background-color: #EFE7DC;
    padding: 30px 0;


`

const FooterContent =styled.h4`
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0 30px;
    letter-spacing: 1px;
    text-align: center;
`
const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function Footer() {
  return (
    <GlobalFooter>
        {/* <FooterContent>Kuda Sachie</FooterContent> */}
        <FooterContent>Follow @Kudakwashe Sachie</FooterContent>
        <FooterIcons>
            <a href="https://twitter.com/KudaSachie" className='IconsStyles fi'><FaTwitter/></a>
            <a href="https://www.facebook.com/profile.php?id=100006154841172" className='IconsStyles fi'><FaFacebook/></a>
            <a href="https://www.instagram.com/kudah_sachie/?hl=en/https://www.instagram.com/kudah_sachie/?hl=en" className='IconsStyles fi'><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/kudakwashe-sachirahwe-9330ba1b5/" className='IconsStyles fi'><FaLinkedin/></a>
        </FooterIcons>
    </GlobalFooter>
    
  )
}

export default Footer