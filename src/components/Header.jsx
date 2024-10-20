import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <>
            <Navbar className="bg-danger border-0 p-3">
                <Container>
                    <Navbar.Brand href="#home" className='text-white fw-bold fs-4 ms-3'>
                        <i className="fa-solid fa-users-gear" />
                        {' '}
                        employeeManagement
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header