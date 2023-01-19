import React from 'react'
import styled from 'styled-components'

const FormC = styled.form`
  margin-top: 2.5rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  @media screen and (max-width: 48rem) {
    margin: 0 auto;
  }
  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`
const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.Subtitle};
  border: 1px solid ${(props) => props.theme.Description};
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  @media screen and (max-width: 36rem) {
    padding: 1rem;
  }
`
const InputProject = styled.textarea`
  width: 100%;
  border: 1px solid ${(props) => props.theme.Description};
  background: none;
  padding: 1rem;
  height: 11rem;
  resize: none;
  color: ${(props) => props.theme.Subtitle};
  font-size: 1rem;
  outline: none;
`
const ButtomForm = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.Title};
  color: ${(props) => props.theme.Background2};
  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
`
function Form() {
  return (
    <FormC>
      <Input
        type='text'
        name='name'
        placeholder='Ingrese su nombre y apellido'
      />
      <Input
        type='email'
        name='email'
        placeholder='Ingrese su correo electrónico'
      />
      <InputProject
        name='project'
        cols={30}
        rows={10}
        placeholder='Ingrese su consulta o requerimiento'
      />
      <ButtomForm href='#contact'>Enviar</ButtomForm>
    </FormC>
  )
}

export default Form
