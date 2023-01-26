import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.Subtitle};
  border: 1px solid ${(props) => props.theme.Description};
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
`
const Icon = styled.i`
  border: 1px solid ${(props) => props.theme.Title};
  border-right: none;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.Title};
  color: ${(props) => props.theme.Background2};
`
function InputForm({ id, type, name, placeholder, icon }) {
  return (
    <Container>
      <Icon className={`uil uil-${icon}`} />
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </Container>
  )
}

export default InputForm
