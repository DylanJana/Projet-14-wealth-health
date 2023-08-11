import React from 'react'
import './Page404.css'
import errorPic  from '../../assets/img/page404.webp'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <section className='page-error mb--xxl'>
      <div className='flex justify-content--center align-items--center'>
        <img 
          src={errorPic} 
          alt=""
          className='page-error__pic'
          width="600"
          height="400"
          loading="lazy" />
          <Link to={'/'} className='btn--plain btn--green'>
            Retour à la page d'accueil
          </Link>
      </div>
    </section>
  )
}
