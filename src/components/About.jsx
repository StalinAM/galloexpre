import React from 'react'
import styled from 'styled-components'
import data from '../assets/data.json'
const Container = styled.section`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 0 6rem;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.Background};
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
const Title = styled.h2`
  font-size: 2rem;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`
const History = styled.article`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`
const Box = styled.article`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.Background2};
  padding: 2rem;
  border-radius: 2rem;
  background-image: url('../src/assets/6.webp');
  background-size: cover;
  background-blend-mode: soft-light;
`
const TitleInfo = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.Title};
`
const Span = styled.span`
  color: ${(props) => props.theme.Title};
  font-weight: bold;
`
function About() {
  return (
    <Container id='nosotros'>
      <Title>Quiénes somos</Title>
      <Content>
        <History>
          <p>
            Esta compañía nace por la necesidad de trabajo y empeño de un grupo
            de colaboradores quienes un 3 de octubre de 2006, motivados por el
            deseo de cumplir un sueño, buscan emprender en el mundo de la
            transportación pesada creando un logotipo inicial de{' '}
            <Span>"TRANSPORTE GALLITO"</Span> nombre que daría inicio al
            nacimiento de algo más grande, por medio del cual ingresamos a
            muchas empresas de renombre, quienes nos dieron la oportunidad de
            ejercer nuestras aspiraciones de crecimiento personal, familiar y
            profesional de manera honrada y responsable.
          </p>
          <p>
            Gracias a Dios y a nuestros fieles clientes que creyeron en nuestras
            capacidades, habilidades y destrezas, a mediados del 2013, nace la
            compañía jurídica familiar cuyo nombre es{' '}
            <Span>"GALLOEXPRE C.A."</Span> más sólida pues somos un equipo que
            busca seguir creciendo para cumplir las expectativas de nuestros
            clientes y de la compañía en general. Teniendo como principal
            objetivo ser útil y servir a la sociedad de manera honrada y
            responsable.
          </p>
        </History>
        <Info>
          {data.nosotros.info.map((item, index) => (
            <Box key={index}>
              <TitleInfo>{item.name}</TitleInfo>
              <p>{item.description}</p>
            </Box>
          ))}
        </Info>
      </Content>
    </Container>
  )
}

export default About
