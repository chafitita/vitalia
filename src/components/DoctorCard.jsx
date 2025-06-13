import { Card, CardContent, Typography} from '@mui/material'

export default function DoctorCard({ doctor, onClick }) {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', p: 2, m: 1, borderRadius: 3, width: 250 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="#32736A">{doctor.nombre}</Typography>
        <Typography variant="body2" color="#32736A">{doctor.clinica}</Typography>
      </CardContent>
    </Card>
  );
}
