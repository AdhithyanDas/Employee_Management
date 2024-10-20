import baseUrl from "./baseUrl"
import commonApi from "./commonApi"

export const addEmployeeApi = async (data) => {
    return await commonApi(`${baseUrl}/addemp`, 'POST', "", data)
}

export const getEmployeeApi = async () => {
    return await commonApi(`${baseUrl}/employees`, 'GET', "", "")
}

export const deleteEmployeeApi = async (id) => {
    return await commonApi(`${baseUrl}/deleteemp/${id}`, 'DELETE', "", {})
}

export const updateEmployeeApi = async (id, data) => {
    return await commonApi(`${baseUrl}/updateemp/${id}`, 'PUT', "", data)
}