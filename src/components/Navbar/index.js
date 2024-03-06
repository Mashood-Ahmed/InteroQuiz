import React from 'react'

import {Container, Nav, Logo, Title} from './navbarStyle.js';

const Navbar = () => {
  return (
    <>
        <Container>
            <Nav>
                <Logo><span className='dent'>i</span>Q</Logo>
                <Title>InteroQuiz</Title>
            </Nav>
        </Container>
    </>
  )
}

export default Navbar