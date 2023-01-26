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
  @media screen and (max-width: 768px) {
    filter: ${(props) => (props.show ? 'blur(2px)' : 'none')};
  }
`
const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme.Title};
  font-weight: bold;
  z-index: 101;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.Background};
    flex-direction: column;
    width: min(75vw, 400px);
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`
const Item = styled.li`
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.Hover};
  }
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.Hover};
    bottom: -10px;
    transition: 0.3s;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
const Open = styled.i`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: ${(props) => props.theme.Subtitle};
    font-size: 2.5rem;
  }
`
const Close = styled.i`
  cursor: pointer;
  display: none;
  color: ${(props) => props.theme.Subtitle};
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    right: 1.5rem;
    top: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    right: 1rem;
    top: 2.5rem;
  }
`
function Header({ toggle, setToggle }) {
  return (
    <Container>
      <Img src={logo} alt='logo Gallo Expre' show={toggle} />
      <nav>
        <Menu show={toggle}>
          {listMenu.map((item) => (
            <Item key={item.id}>
              <a href={item.link} onClick={() => setToggle(!toggle)}>
                {item.title.toUpperCase()}
              </a>
            </Item>
          ))}
          <Close
            show={toggle}
            className='uil uil-times'
            onClick={() => setToggle(!toggle)}
          />
        </Menu>
        <Open className='uil uil-bars' onClick={() => setToggle(!toggle)} />
      </nav>
    </Container>
  )
}

export default Header
