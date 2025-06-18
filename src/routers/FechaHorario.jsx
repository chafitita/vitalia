import React from 'react'
import BasicDatePicker from '../components/BasicDatePicker'

import '../css/App.css'

export const FechaHorario = () => {
  return (
    <>
        <div className="main">
            <div className="content">
              <h1>Paso 3</h1>
              <h2 className="sub-title">Fecha y horario del turno</h2>
            </div>
            <BasicDatePicker />
        </div>
    </>
  )
}
