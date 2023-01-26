import React from 'react'
import styled from 'styled-components'
import Direction from './Direction'
import Form from './Form'
import data from '../assets/data.json'

const Container = styled.section`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 4rem 6rem;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.Background};
  @media screen and (max-width: 1080px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;
  }
`
const Title = styled.h2`
  font-size: 2rem;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
const DirContent = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`

function Contact() {
  const dirQuito = data.direccion[0]
  const dirGuayaquil = data.direccion[1]
  return (
    <Container id='contacto'>
      <Title>Contáctenos</Title>
      <Content>
        <DirContent>
          <Direction
            ciudad={dirQuito.ciudad}
            direccion={dirQuito.direccion}
            celular={dirQuito.celular}
            email={dirQuito.correo}
            map={dirQuito.map}
          />
          <Direction
            ciudad={dirGuayaquil.ciudad}
            direccion={dirGuayaquil.direccion}
            celular={dirGuayaquil.celular}
            email={dirGuayaquil.correo}
            map={dirGuayaquil.map}
          />
        </DirContent>
        <Form />
      </Content>
    </Container>
  )
}

export default Contact
