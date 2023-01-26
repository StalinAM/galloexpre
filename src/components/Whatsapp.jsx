import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: -150px;
  transform: translateY(-50%);
  z-index: 9;
  border-radius: 2em 0 0 2em;
  overflow: auto;
  box-shadow: -1px 3px 3px rgb(0 0 0 / 20%);
  transition: all 0.3s ease;
  padding: 0 12px 0;
  background: ${(props) => props.theme.Title};
  &:hover {
    right: -2px;
  }
`
const Link = styled.a`
  display: flex;
  gap: 0.5rem;
  position: relative;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  line-height: 62px;
  color: white;
`
const Icon = styled.i`
  font-size: 2.3rem;
`
const Text = styled.p`
  font-size: 1.6rem;
`
function Whatsapp() {
  return (
    <Container>
      <Link
        href='https://wa.me/593984662435?text=Me%20ayudas%20con%20información%20'
        target='_blank'
        rel='noreferrer'
        aria-label='Escríbenos a nuestro numero de Whatsapp'
      >
        <Icon className='uil uil-whatsapp' />
        <Text>Escríbenos</Text>
      </Link>
    </Container>
  )
}

export default Whatsapp
