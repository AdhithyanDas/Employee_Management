import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-danger text-white p-4">
                <Row className="p-4">
                    <Col md={5}>
                        <h3 className='fw-bold'>employeeManagement</h3>
                        <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla aperiam saepe, laborum a cupiditate! Dolores, praesentium debitis. Necessitatibus natus asperiores, cum assumenda minima corrupti ipsum quidem dolorem libero accusamus. </p>
                    </Col>
                    <Col md={2}>
                        <h4 className='fw-bold'>Links</h4>
                        <div className="d-flex flex-column">
                            <Link to={'/'} className='text-white'>Landing</Link>
                            <Link to={'/home'} className='text-white'>Home</Link>
                        </div>
                    </Col>
                    <Col md={5}>
                        <h4 className='fw-bold'>Feedback</h4>
                        <textarea name="" id="" className="form-control mt-3"></textarea>
                        <button className='btn btn-dark mt-3 fw-bold'>Submit</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer