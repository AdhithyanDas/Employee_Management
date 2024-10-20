import React, { useState, useEffect, useContext } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import Edit from './Edit'
import { getEmployeeApi, deleteEmployeeApi } from '../services/allApis'
import { addEmployeeResponseContext } from '../context/ContextApi'
import { toast } from 'react-toastify'

function Employees() {

    const [data, setData] = useState([])

    const [editResponse, setEditResponse] = useState('')

    const { addResponse, setAddResponse } = useContext(addEmployeeResponseContext)

    useEffect(() => {
        getData()
    }, [addResponse, editResponse])

    const getData = async () => {
        const res = await getEmployeeApi()
        console.log(res)
        if (res.status = 200) {
            setData(res.data)
        }
    }

    const handleDelete = async (id) => {
        const res = await deleteEmployeeApi(id)
        if (res.status == 200) {
            toast.success("Employee deleted successfully !!")
            getData()
        } else {
            toast.warning("Failed to delete employee. Please try again !!")
        }
    }

    return (
        <>
            <div className='mx-4'>
                <div className='container-fluid shadow mb-4 p-4 rounded' style={{ backgroundColor: 'whitesmoke' }}>
                    <Row>
                        {
                            data.length > 0 ?
                                <>
                                    {
                                        data.map(item => (
                                            <Col md={3} className='mb-1'>
                                                <Card style={{ minWidth: '14rem' }} className='d-flex align-items-center shadow mb-3'>
                                                    <Card.Img variant="top" className='mt-3' style={{ width: '10vh' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmvSoqEMvs4E-TIgyfMdztZYEdKav-zok1A&s" />
                                                    <Card.Body>
                                                        <Card.Title className='text-center fw-bold text-success'>{item.firstname} {item.lastname}</Card.Title>
                                                        <Card.Text className='text-center'>
                                                            <p><span className='fw-bold'>Age :</span> {item.age}</p>
                                                            <p><span className='fw-bold'>Qualification :</span> {item.qualification}</p>
                                                            <p><span className='fw-bold'>Email :</span> {item.email}</p>
                                                        </Card.Text>
                                                        <div className='d-flex justify-content-evenly'>
                                                            <Edit employee={item} edit={setEditResponse} />
                                                            <button className='btn' onClick={() => handleDelete(item._id)}>
                                                                <i className="fa-solid fa-trash-can text-primary" />
                                                            </button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </>
                                :
                                <h3 className='text-center text-black fw-bold'>No employees yet !!</h3>
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Employees