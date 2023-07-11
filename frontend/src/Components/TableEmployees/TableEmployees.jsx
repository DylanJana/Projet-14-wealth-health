import React, { useEffect } from 'react'
import './TableEmployees.css'
import { Link } from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid"
import uuid from 'react-uuid'
import { employees } from '../../datas/employees'

// localStorage.setItem('employees', JSON.stringify(employees))

export default function TableEmployees() {
  const columnsTable = [
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "dateBirth", headerName: "Date of Birth", width: 150 },
    { field: "startDate", headerName: "Start date", width: 150 },
    { field: "street", headerName: "Street", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 150 },
    { field: "zipCode", headerName: "Zip Code", width: 150 },
    { field: "department", headerName: "Department", width: 150 }
  ]
  // useEffect(() => {
  //   localStorage.setItem('employees', JSON.stringify(employees))
  // }, [])

  
  const rowsTable =  [...employees,...JSON.parse(localStorage.getItem('employees'))]

  if(rowsTable && rowsTable.length) {
    return (
      <div>
  
        <DataGrid 
          rows={rowsTable}
          getRowId={uuid}
          columns={columnsTable}
          pageSize={10}
          rowsPerPageOptions={[10]}
          className='mb--md'
        />
        <div className='mb--xxl'>
          <Link to={'/create-employee'} className="btn--plain btn--green">Create an employee</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
