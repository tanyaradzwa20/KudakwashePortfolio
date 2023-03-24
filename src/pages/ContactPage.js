import React from 'react'
import { Heroe } from './Componets/Hero'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'
import { HeroData } from './Componets/Data/HeroData';
import { ContactText } from './Componets/Contact'

function ContactPage() {
    return (
        <>
            <Heroe>
            <ContactText>Hello</ContactText>
            {HeroData.map((item, i) => {
                return (
                <div key={i} className={item.cName}>
                    <h1>{item.title3}</h1>
                    <h1>{item.title4}</h1>
                </div>
        )
      })}

            </Heroe>
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage