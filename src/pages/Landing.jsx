import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items center" style={{ minHeight: '90vh' }}>
                <Row className='p-4 container'>
                    <Col md={6} sm={12} className="d-flex justify-content-center flex-column">
                        <h2 className='text-danger fw-bold'>employeeManagement</h2>
                        <p className="text-dark" style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis necessitatibus omnis officiis! Perspiciatis reprehenderit provident itaque, quae necessitatibus dolorum nemo enim magnam facilis rerum illo eaque culpa saepe libero facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur nisi corrupti hic et, facilis molestias a dolorem id quasi iure nostrum officia! Possimus hic nostrum dolores consequuntur commodi quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus placeat at sint delectus rem harum, aperiam totam amet laudantium suscipit? Aliquid esse reprehenderit voluptatem, autem magni repellendus. Numquam, non! </p>
                        <div className='d-grid'>
                            <Link className='btn btn-danger fs-5 fw-bold' to={'/home'}>Get Started</Link>
                        </div>
                    </Col>
                    <Col md={6} col={12} className="d-flex justify-content-center flex-column">
                        <img className='img-fluid rounded' width={''} src="https://i.pinimg.com/originals/d7/57/3b/d7573b3e236d935c3f87f3d5668a4695.gif" alt="landing" />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Landing