import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'
import { addEmployeeApi } from '../services/allApis'
import { addEmployeeResponseContext } from '../context/ContextApi'

function Add() {

    const [show, setShow] = useState(false)
    const [employee, setEmployee] = useState({
        firstname: "", lastname: "", age: "", qualification: "", email: ""
    })

    const { addResponse, setAddResponse } = useContext(addEmployeeResponseContext)

    const handleAddEmployee = async () => {
        console.log(employee)
        const { firstname, lastname, age, qualification, email } = employee
        if (!firstname || !lastname || !age || !qualification || !email) {
            toast.warning("Please provide valid inputs in all fields !!")
        } else {
            const fd = new FormData()
            fd.append('firstname', firstname)
            fd.append('lastname', lastname)
            fd.append('age', age)
            fd.append('qualification', qualification)
            fd.append('email', email)

            const res = await addEmployeeApi(fd)
            console.log(res)
            if (res.status == 200) {
                toast.success("Employee added successfully !!")
                setEmployee({
                    firstname: "", lastname: "", age: "", qualification: "", email: ""
                })
                handleClose()
                setAddResponse(res)
            } else {
                toast.error("Failed to add employee. Please try again !!")
            }
        }
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <div className='my-5 mx-5' onClick={handleShow}>
                <button className='btn btn-outline-danger fw-bold border-0'>Add Employee +</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold text-danger'>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel label="Firstname" onChange={(e) => setEmployee({ ...employee, firstname: e.target.value })}>
                        <Form.Control type="text" placeholder="firstname" />
                    </FloatingLabel>
                    <FloatingLabel label="Lastname" className='mt-3' onChange={(e) => setEmployee({ ...employee, lastname: e.target.value })}>
                        <Form.Control type="text" placeholder="lastname" />
                    </FloatingLabel>
                    <FloatingLabel label="Qualification" className='mt-3' onChange={(e) => setEmployee({ ...employee, qualification: e.target.value })}>
                        <Form.Control type="text" placeholder="quali" />
                    </FloatingLabel>
                    <FloatingLabel label="Age" className='mt-3' onChange={(e) => setEmployee({ ...employee, age: e.target.value })}>
                        <Form.Control type="numbar" placeholder="age" />
                    </FloatingLabel>
                    <FloatingLabel label="Email address" className='mt-3' onChange={(e) => setEmployee({ ...employee, email: e.target.value })}>
                        <Form.Control type="email" placeholder="email" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary fw-bold" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger fw-bold" onClick={handleAddEmployee}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add