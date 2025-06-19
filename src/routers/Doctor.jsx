import React from 'react'
import "../css/App.css"
import DoctorList from '../components/DoctorList'

export const Doctor = () => {
  return (
    <>
        <div className="main">
            <div className="content">
              <h1>Paso 2</h1>
              <h2 className="sub-title">Elige el médico que te atenderá</h2>
              <DoctorList />
            </div>

        </div>
    </>
  )
}
