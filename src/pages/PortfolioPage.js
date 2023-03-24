import React from 'react'
import { Heroe } from './Componets/Hero'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'
import { ContactText } from './Componets/Contact'
import { HeroData } from './Componets/Data/HeroData';
import { WebsiteData } from './Componets/Data/WebsitesData';
import { MobileData } from './Componets/Data/MobileData';
import { DashboardData } from './Componets/Data/DashboardData';
import {Container, Row, Col} from "react-bootstrap";
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
`
const Heading = styled.h2`
    color: #52525238;
    font-weight: 700;
    font-size: 100px;
    padding-left: 80px;
    margin-top: 60px ;

@media (max-width: 575px) {
  font-size: 60px;
  padding-left: 15px;
};

@media (min-width: 768px) and (max-width: 991px) {
  font-size: 70px;
  padding-left: 30px;
}
@media (min-width: 992px) and (max-width: 1199px) {
}

`

const InnerHeading = styled.h4`
    text-shadow: 20px -18px 1px  rgba(82, 82, 82, 0.12);
    font-size: 50px;
    color: black;
    font-family: 500;
    width: 100%;
    margin-top: 60px;


@media (max-width: 575px) {
  font-size: 40px;
  padding-left: 15px;
};

@media (min-width: 768px) and (max-width: 991px) {
    font-size: 40px;
    padding-left: 30px;
}
@media (min-width: 992px) and (max-width: 1199px) {
}


`
const Wlink = styled.a`
    background-color: transparent;
`

function PortfolioPage() {
  return (
    <>
        <Heroe>
            <ContactText>Hello</ContactText>
                {HeroData.map((item, i) => {
                    return (
                    <div key={i} >
                        <h1>{item.title5}</h1>
                        <h1>{item.title6}</h1>
                    </div>
                     )
                 })}
        </Heroe>
        <Heading>Portfolio</Heading>


        <Container>
        <Row>
            <InnerHeading>Websites</InnerHeading>
            {WebsiteData.map((item, i) => {
                return (
                <Col md={4} key={i}>
                    <Wlink href={item.website}>
                        <Image src={item.image} alt='kudakwashe sachirahwe'/>
                    </Wlink>
                </Col>
                    )
                })}
        </Row>

        <Row>
            <InnerHeading>Mobile Apps</InnerHeading>
            {MobileData.map((item, i) => {
                return (
                <Col md={4} key={i}>
                    <Wlink href={item.website}>
                        <Image src={item.image} alt='kudakwashe sachirahwe'/>
                    </Wlink>
                </Col>
                    )
                })}   
        </Row>
        <Row>
            <InnerHeading>Dashboards</InnerHeading>
            {DashboardData.map((item, i) => {
                return (
                <Col md={4} key={i}>
                    <Wlink href={item.website}>
                        <Image src={item.image} alt='kudakwashe sachirahwe'/>
                    </Wlink>
                </Col>
                    )
                })}   
        </Row>
        </Container>

        <Contact />
        <Footer />
    </>
  )
}

export default PortfolioPage