import React from 'react'
import styled from 'styled-components'
import logo from '../src/assets/logoGe.webp'
const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-items: center;
  padding: 2rem 6rem;
`
const Img = styled.img`
  width: 12rem;
  height: auto;
  object-fit: cover;
`
const Social = styled.ul`
  display: flex;
  gap: 1rem;
`
const Icon = styled.li`
  font-size: 1.5rem;
`
function Footer() {
  return (
    <Container>
      <div>
        <Img src={logo} alt='logo Gallo Expre' />
        <p>
          Nos preocupamos por el seguimiento y cuidado que debe darse a su
          mercadería
        </p>
        <Social>
          <Icon>
            <a href='https://www.facebook.com/GalloExpre-CA-Compa%C3%B1ia-de-Transporte-Pesado-101126645601053'>
              <i className='uil uil-facebook-f' />
            </a>
          </Icon>
          <Icon>
            <a href='https://wa.me/593984662435?text=Me%20ayudas%20con%20información%20'>
              <i className='uil uil-whatsapp' />
            </a>
          </Icon>
        </Social>
      </div>
      <div>
        <h3>Contacto</h3>
      </div>
    </Container>
  )
}

export default Footer
