import React from 'react'
import styled from 'styled-components';
import {Row, Col} from "react-bootstrap";

const ContactContent =styled.div`
    padding: 0 0 0 80px;
    margin-bottom: 30px;


@media (max-width: 575px) {
    font-size: 40px;
    padding:0 0 0 30px;
};

@media (min-width: 768px) and (max-width: 991px) {

}
@media (min-width: 992px) and (max-width: 1199px) {
}

`
export const ContactText = styled.h3`
    color: #FF9B4F;
    font-size: 16px;
    font-weight: 500;
`
const ContactHeading = styled.h2`
    color: #525252;
    font-size: 60px;
    font-weight: 700;

@media (max-width: 575px) {
    font-size: 30px;
};
@media (min-width: 568px) and (max-width: 767px){
  font-size: 30px;
 
}
@media (min-width: 768px) and (max-width: 991px) {

}
@media (min-width: 992px) and (max-width: 1199px) {
}
 `

const Absolute = styled.div`
  position:absolute;
  background-color: #F8F2F2;
  width: 91.5%;
  height: 20px;
  right:0;
  bottom: 0;

@media (max-width: 575px) {
  width:100%
};
@media (min-width: 568px) and (max-width: 767px){
  width:100%
}
@media (min-width: 768px) and (max-width: 991px) {
  width: 100%;
}
@media (min-width: 992px) and (max-width: 1199px) {
  width: 87.5%;

}

   `


function Contact() {
  return (
    <>
    <section>
      <ContactContent>
        <ContactText>Say Hello</ContactText>
        <ContactHeading>Contact Me</ContactHeading>
      </ContactContent>
      <Row id="ContactRow">
        <Col md={6}>
          <form action="https://formsubmit.co/kudakwashe@uncommon.org" method="POST">
                <input type="hidden" name="_subject" value="New submission from your Portfolio Kuda!"/>
                <input type="text" name="name" required placeholder="Name:"/>
                <input type="email" name="email" required placeholder="Email:"/>
                <textarea type="text" name="message" required placeholder="Message:" id="message"/>
                <input type="hidden" name="_captcha" value="false"/>
                <button type="submit">Submit</button>
            </form>
        </Col>
        <Col md={6}>
          <Absolute/>
          <img src='images/kuda.svg' alt="UX/UI designer" id="ContactImg"/>
        </Col>
      </Row>
    </section>
    </>
  )
}

export default Contact