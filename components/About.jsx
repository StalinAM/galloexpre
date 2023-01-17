import React from 'react'
import styled from 'styled-components'
import data from '../src/assets/data.json'
const Container = styled.section`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 0 6rem;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.Background};
`
const Title = styled.h2`
  font-size: 2rem;
`
const Content = styled.div`
  display: flex;
  gap: 2rem;
`
const History = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Info = styled.div`
  display: flex;
  gap: 2rem;
`
const Box = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.Background2};
  padding: 2rem;
  border-radius: 2rem;
`
const TitleInfo = styled.h3`
  font-size: 1.4rem;
`
function About() {
  return (
    <Container id='nosotros'>
      <Title>Quiénes somos</Title>
      <Content>
        <History>
          {data.nosotros.historia.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
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
