import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 128px);
  padding: 0 6rem;
  background-image: url('../src/assets/background.webp');
  background-size: contain;
  background-color: ${(props) => props.theme.Background2};
  background-repeat: no-repeat;
  background-position: right;
`
const Content = styled.div`
  max-width: 60ch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  line-height: 1.2;
`
const Title = styled.h1`
  color: ${(props) => props.theme.Description};
  font-size: 3.6rem;
  font-weight: bold;
`
const Span = styled.span`
  color: ${(props) => props.theme.Title};
`
const Paragraph = styled.p`
  font-size: 2rem;
`
const Button = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.Title};
  color: ${(props) => props.theme.Background2};
  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
`
function Home() {
  return (
    <Container>
      <Content>
        <Title>
          Servicio de <Span>transporte de carga</Span>
        </Title>
        <Paragraph>Líder de carga pesada a nivel nacional</Paragraph>
        <Button href='#contact'>Contáctanos</Button>{' '}
      </Content>
    </Container>
  )
}

export default Home
