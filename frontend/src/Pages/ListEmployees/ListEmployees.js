import React from 'react'
import './ListEmployees.css'
import TableEmployees from '../../Components/TableEmployees/TableEmployees.js'

export default function ListEmployees() {
  return (
    <section className='ly--lg-container'>
      <h2 className='title--xl mb--sm' data-testid="title-array">Discover your whole team :</h2>
      <TableEmployees />
    </section>
  )
}
