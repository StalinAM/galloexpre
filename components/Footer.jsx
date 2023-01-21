import React from 'react'
import styled from 'styled-components'
import logo from '../src/assets/logoGe.webp'
const Container = styled.footer`
  padding: 2rem 6rem;
`
const Img = styled.img`
  width: 12rem;
  height: auto;
  object-fit: cover;
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
        <ul>
          <li>
            <a href=''>
              <i className='uil uil-facebook-f' />
            </a>
          </li>
          <li>
            <a href=''>
              <i className='uil uil-whatsapp' />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
