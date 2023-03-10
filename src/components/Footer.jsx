import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logoGE.webp'

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 2rem 6rem;
  @media screen and (max-width: 1080px) {
    padding: 3rem 3rem;
    gap: 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;
  }
`
const Text = styled.p`
  max-width: 400px;
`
const Img = styled.img`
  width: 12rem;
  height: auto;
  object-fit: cover;
`
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.1rem;
`
const Title = styled.h3`
  font-size: 1.2rem;
`

const Link = styled.li`
  font-size: 1rem;
  &:hover {
    color: #ff0000;
  }
`
const Social = styled.ul`
  margin-top: 0.7rem;
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme.Title};
`
const Icon = styled.li`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.Title};
  color: white;
  border-radius: 50%;
  padding: 2.5px 8px;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`
function Footer() {
  return (
    <Container>
      <Left>
        <Img src={logo} alt='logo Gallo Expre' />
        <Text>
          Nos preocupamos por el seguimiento y cuidado que debe darse a su
          mercadería.
        </Text>
      </Left>
      <Contacto>
        <Title>Menú</Title>
        <Menu>
          <Link>
            <a href='#inicio'>Inicio</a>
          </Link>
          <Link>
            <a href='#nosotros'>Nosotros</a>
          </Link>
          <Link>
            <a href='#servicios'>Servicios</a>
          </Link>
        </Menu>
        <Social>
          <Icon>
            <a
              href='https://www.facebook.com/GalloExpre-CA-Compa%C3%B1ia-de-Transporte-Pesado-101126645601053'
              target='_blank'
              rel='noreferrer'
              aria-label='Síguenos en Facebook'
            >
              <i className='uil uil-facebook-f' />
            </a>
          </Icon>
          <Icon>
            <a
              href='https://wa.me/593984662435?text=Me%20ayudas%20con%20información%20'
              target='_blank'
              rel='noreferrer'
              aria-label='Escríbenos a nuestro numero de Whatsapp'
            >
              <i className='uil uil-whatsapp' />
            </a>
          </Icon>
        </Social>
      </Contacto>
      <Contacto>
        <Title>Contácto</Title>
        <p>
          Amparo Gallo: <span>099 243 4904</span>
        </p>
        <p>
          William Chasi: <span>099 588 9577 / 098 466 2435</span>
        </p>
        <p>operaciones1galloexpre@gmail.com</p>
      </Contacto>
    </Container>
  )
}

export default Footer
