import React from 'react'
import styled from 'styled-components'
import InputForm from './subComponents/InputForm'

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
      <InputForm
        name='name'
        type='name'
        icon='user'
        placeholder='Ingrese Nombre y Apellido'
      />
      <InputForm
        name='email'
        type='email'
        icon='envelope-alt'
        placeholder='Ingrese su correo'
      />
      <InputForm
        name='phone'
        type='text'
        icon='phone-alt'
        placeholder='Ingrese su número celular'
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
