import React from 'react'
import { Col, } from "react-bootstrap"
import styled from 'styled-components';


const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  padding: 10px 0;
`
const CardBody = styled.div`
  width: 100%;
  background-color: #F8F2F2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0 30px 50px;
  transition: 0.6s ease;


  &:hover { 
     background-color: #FFFFFF;
     transform: translate(0%, -3%);
     /* transition: 0.6s ease; */
   }

  
@media (max-width: 575px) {
  margin-top: 30px;
};

@media (min-width: 768px) and (max-width: 991px) {
  margin-top: 40px;

}
@media (min-width: 992px) and (max-width: 1199px) {

}
`

function CardItem({ linkUrl, image, title, linkText }) {
  return (
    <>
      <Col md={4}>
        <CardBody>
        <img src={image} alt="UX/UI designer" className='CardImg' />
        <CardTitle >{title}</CardTitle>
        <a href={linkUrl} className="CardButton">{linkText}</a>
        </CardBody>
      </Col>
    </>
  )
}

export default CardItem