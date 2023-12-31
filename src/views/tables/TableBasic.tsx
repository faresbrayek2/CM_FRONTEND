import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'

const createData = (type: string, status: string, seller: string, price: string, createdDate: string) => {
  return { type, status, seller, price, createdDate }
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Refunded':
      return { color: 'green', fontWeight: 'bold' }
    case 'Pending':
      return { color: 'orange', fontWeight: 'bold' }
    case 'Rejected':
      return { color: 'red', fontWeight: 'bold' }
    default:
      return {}
  }
}

const rows = [
  createData('Visa', 'Refunded', 'Seller A', '100', '2023-09-30'),
  createData('Master Card', 'Pending', 'Seller B', '200', '2023-09-29'),
  createData('American Express', 'Rejected', 'Seller C', '150', '2023-09-28'),
  createData('Discover', 'Pending', 'Seller D', '50', '2023-09-27')
]

const TableReports = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Seller</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Created Date</TableCell>
            <TableCell align='right'>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.type}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.type}
              </TableCell>
              <TableCell>
                <span style={getStatusStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell>{row.seller}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
              <TableCell align='right'>{row.createdDate}</TableCell>
              <TableCell align='right'>
                {/* Render a View button for credit cards */}
                <Button variant='contained' color='primary'>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableReports
