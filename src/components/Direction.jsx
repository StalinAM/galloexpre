import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
const Title = styled.h3`
  color: ${(props) => props.theme.Title};
`
const ListContact = styled.ul`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
`
const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
const Icon = styled.i`
  font-size: 1.5rem;
  color: #ff0000;
`
const Map = styled.iframe`
  width: 400px;
  height: 300px;
  border: 0;
`
function Direction({ ciudad, direccion, celular, email, map }) {
  return (
    <Container>
      <Title>{ciudad}</Title>
      <ListContact>
        <Item>
          <Icon className='uil uil-map-marker' />
          {direccion}
        </Item>
        <Item>
          <Icon className='uil uil-phone-alt' />
          {celular}
        </Item>
        <Item>
          <Icon className='uil uil-envelope-alt' />
          {email}
        </Item>
      </ListContact>
      <Map
        src={map}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Container>
  )
}

export default Direction
