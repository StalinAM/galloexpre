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
  background-color: ${(props) => props.theme.Background2};
`
const Title = styled.h2`
  font-size: 2rem;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 300px;
  padding: 0.5rem 1rem;
`
const Circle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.Background};
`
const Icon = styled.i`
  object-fit: cover;
  font-size: 4rem;
  color: ${(props) => props.theme.Title};
`
function Services() {
  return (
    <Container id='servicios'>
      <Title>Servicios</Title>
      <Content>
        {data.servicios.map((item, index) => (
          <Card key={index}>
            <Circle>
              <Icon className={`uil uil-${item.icon}`} />
            </Circle>
            <p>{item.description}</p>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Services
