import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logoGe.webp'
import { listMenu } from '../data'
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem 0;
  @media screen and (max-width: 1080px) {
    padding: 1.5rem 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`
const Img = styled.img`
  width: 10rem;
  height: auto;
  object-fit: cover;
`
const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme.Description};
  font-weight: bold;
`
const Item = styled.li`
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.Title};
  }
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.Title};
    bottom: -10px;
    transition: 0.3s;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
function Header() {
  return (
    <Container>
      <Img src={logo} alt='logo Gallo Expre' />
      <nav>
        <Menu>
          {listMenu.map((item) => (
            <Item key={item.id}>
              <a href={item.link}>{item.title.toUpperCase()}</a>
            </Item>
          ))}
        </Menu>
      </nav>
    </Container>
  )
}

export default Header
