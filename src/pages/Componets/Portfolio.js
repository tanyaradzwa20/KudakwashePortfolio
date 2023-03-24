
import React from 'react'
import styled from 'styled-components';
import {Container, Row} from "react-bootstrap";
import CardItem from './Data/PortfolioCardItem'
import { CardData } from './Data/PortfolioCardData'


const PortfolioContent =styled.div`
    padding: 0 0 0 80px;
    margin-bottom: 80px;

@media (max-width: 575px) {
    padding: 0 0 0 30px;
};
@media (min-width: 568px) and (max-width: 767px){
    padding: 0 0 0 30px;
   
}
@media (min-width: 768px) and (max-width: 991px) {
    padding: 0 0 0 40px;

}
@media (min-width: 992px) and (max-width: 1199px) {
}

`
const PortfolioText = styled.h3`
    color: #FF9B4F;
    font-size: 16px;
    font-weight: 500;
`
const PortfolioHeading = styled.h2`
    color: #525252;
    font-size: 60px;
    font-weight: 700;

@media (max-width: 575px) {
    font-size: 30px;
    /* padding: 50px 0 50px 30px; */
};
@media (min-width: 568px) and (max-width: 767px){
    font-size: 30px;

}
@media (min-width: 768px) and (max-width: 991px) {
    font-size: 50px;

}
@media (min-width: 992px) and (max-width: 1199px) {
}
`

function Portfolio() {
  return (
    <>
        <PortfolioContent>
            <PortfolioText>Portfolio</PortfolioText>
            <PortfolioHeading>Some things <br/> l have worked on</PortfolioHeading>
        </PortfolioContent>

     <Container>
           <Row>
                {CardData.map(( cardItem, i) => {
                    return (
                    <>
                        <CardItem
                            key={i}
                            image={cardItem.image}
                            title={cardItem.title}
                            linkText={cardItem.linkText} 
                            linkUrl={cardItem.linkUrl}
                        />
                    </>
                    )
                })}
           </Row>
           </Container>
    </>
  )
}

export default Portfolio;