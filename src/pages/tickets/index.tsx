// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import TableTickets from 'src/views/tables/TableTickets'

const Tickets = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='/tickets' target='_blank'>
            Tickets
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableTickets />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tickets
