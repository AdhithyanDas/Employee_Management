import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { updateEmployeeApi } from '../services/allApis'
import { toast } from 'react-toastify'

function Edit({ employee, edit }) {

    const [show, setShow] = useState(false)

    const [employeeDetails, setEmployeeDetails] = useState(employee)

    const handleUpdate = async (id) => {
        const updatedEmployee = {
            firstname: employeeDetails.firstname,
            lastname: employeeDetails.lastname,
            age: employeeDetails.age,
            qualification: employeeDetails.qualification,
            email: employeeDetails.email
        }

        const result = await updateEmployeeApi(id, updatedEmployee)
        if (result.status == 200) {
            toast.success("Employee details updated successfully !!")
            edit(result)
            handleClose()
        } else {
            toast.error("Failed to update employee details. Please try again !!")
        }
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square text-warning" />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold text-danger'>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel label="Firstname" >
                        <Form.Control type="text" placeholder="firstname" value={employeeDetails?.firstname} onChange={(e) => setEmployeeDetails({ ...employeeDetails, firstname: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel label="Lastname" className='mt-3' >
                        <Form.Control type="text" placeholder="lastname" value={employeeDetails?.lastname} onChange={(e) => setEmployeeDetails({ ...employeeDetails, lastname: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel label="Qualification" className='mt-3'>
                        <Form.Control type="text" placeholder="quali" value={employeeDetails?.qualification} onChange={(e) => setEmployeeDetails({ ...employeeDetails, qualification: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel label="Age" className='mt-3' >
                        <Form.Control type="numbar" placeholder="age" value={employeeDetails?.age} onChange={(e) => setEmployeeDetails({ ...employeeDetails, age: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel label="Email address" className='mt-3'>
                        <Form.Control type="email" placeholder="email" value={employeeDetails?.email} onChange={(e) => setEmployeeDetails({ ...employeeDetails, email: e.target.value })} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary fw-bold" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger fw-bold" onClick={() => handleUpdate(employee._id)}>Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Edit