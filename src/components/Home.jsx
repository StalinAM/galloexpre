import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 128px);
  padding: 0 6rem;
  background-color: ${(props) => props.theme.Background2};
  @media screen and (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
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
const Img = styled.img`
  width: 55%;
`
function Home() {
  return (
    <Container id='inicio'>
      <Content>
        <Title>
          Servicio de <Span>transporte de carga</Span>
        </Title>
        <Paragraph>Líder de carga pesada a nivel nacional</Paragraph>
        <Button href='#contacto'>Contáctanos</Button>{' '}
      </Content>
      <Img
        src='../src/assets/background.webp'
        alt='camión de la empresa GalloExpre'
      />
    </Container>
  )
}

export default Home
