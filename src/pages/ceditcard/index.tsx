// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableCollapsible from 'src/views/tables/TableCollapsible'

const CreditCard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='/ceditcard' target='_blank'>
            Credit Cards
          </Link>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader />
          <TableCollapsible />
        </Card>
      </Grid>
    </Grid>
  )
}

export default CreditCard
