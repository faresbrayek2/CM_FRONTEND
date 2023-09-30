// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import TableOrders from 'src/views/tables/TableOrders'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='/orders' target='_blank'>
            Orders
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableOrders />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
