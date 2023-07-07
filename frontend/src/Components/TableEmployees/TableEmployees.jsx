import React from 'react'
import './TableEmployees.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DataGrid } from "@mui/x-data-grid"

export default function TableEmployees() {
  const employees = useSelector((state) => state.employees)
  console.log("EMPLOYEES ", employees)
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
  const rowsTable = [...employees, JSON.parse(localStorage.getItem('employees'))]
  console.log("ROWS TABLE ", rowsTable)

  return (
    <div>
      <DataGrid 
        rows={rowsTable}
        getRowId={(row) => row.lastName}
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
}
