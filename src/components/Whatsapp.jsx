import React from 'react'
import styled from 'styled-components'
const Icon = styled.a`
  color: #45c556;
  font-size: 4rem;
  position: fixed;
  right: 0;
  top: 50%;
`
function Whatsapp() {
  return (
    <Icon
      href='https://wa.me/593984662435?text=Me%20ayudas%20con%20información%20'
      target='_blank'
      rel='noreferrer'
    >
      <i class='uil uil-whatsapp' />
    </Icon>
  )
}

export default Whatsapp
