import React from 'react'
import './ListEmployees.css'
import TableEmployees from '../../Components/TableEmployees/TableEmployees'

export default function ListEmployees() {
  return (
    <section className='ly--lg-container'>
      <h2 className='title--xl mb--sm'>Discover your whole&nbsp;team&nbsp;:</h2>
      <TableEmployees />
    </section>
  )
}
