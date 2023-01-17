import React from 'react'
import styled from 'styled-components'
import logo from '../src/assets/logoGe.webp'
import { listMenu } from '../src/data'
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem 0;
`
const Img = styled.img`
  width: 10rem;
  height: auto;
  object-fit: cover;
`
const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  color: var();
  font-weight: bold;
`
function Header() {
  return (
    <Container>
      <Img src={logo} alt='logo Gallo Expre' />
      <nav>
        <Menu>
          {listMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title.toUpperCase()}</a>
            </li>
          ))}
        </Menu>
      </nav>
    </Container>
  )
}

export default Header
