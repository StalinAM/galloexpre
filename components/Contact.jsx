import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const Container = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0 6rem;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.Backgrounds};
`
const Title = styled.h2`
  font-size: 2rem;
`
function Contact() {
  return (
    <Container id='contacto'>
      <Title>Contáctenos</Title>
      <Form />
    </Container>
  )
}

export default Contact
