import '../css/App.css'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'

export const Finalización = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
  }
  return (
    <>
        <div className="main">
            <div className="content">
              <h1>Su turno ha sido agendado exitosamente</h1>
              <h2 className="sub-title">Se enviará a su correo la información detallada del turno</h2>
            </div>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#279281',
                    marginTop: '1em',
                    '&:hover': { backgroundColor: '#00A88D' }
                }}
                onClick={handleClick}
                >
                Volver al inicio
            </Button>
        </div>
    </>
  )
}
