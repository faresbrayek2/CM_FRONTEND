import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import { React } from 'mdi-material-ui'

const createData = (ticketNumber: string, status: string, title: string, lastReply: string, lastRepliedBy: string) => {
  return { ticketNumber, status, title, lastReply, lastRepliedBy }
}

const getStatusStyle = (status: string) => {
  let style = {
    fontWeight: 'bold',
    color: status === 'Closed' ? 'green' : 'blue' // Customize colors for 'Closed' and 'Open'
  }

  return style
}

const rows = [
  createData('T12345', 'Closed', 'Issue with Product A', '2023-09-30', 'Admin'),
  createData('T12346', 'Open', 'Billing Inquiry', '2023-09-29', 'Buyer A'),
  createData('T12347', 'Closed', 'Technical Support Request', '2023-09-28', 'Admin'),
  createData('T12348', 'Open', 'Account Access Issue', '2023-09-27', 'Buyer A')
]

const TableTickets = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='ticket table'>
        <TableHead>
          <TableRow>
            <TableCell>Ticket Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Last Reply</TableCell>
            <TableCell>Last Replied By</TableCell>
            <TableCell align='right'>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.ticketNumber}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.ticketNumber}
              </TableCell>
              <TableCell>
                <span style={getStatusStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.lastReply}</TableCell>
              <TableCell>{row.lastRepliedBy}</TableCell>
              <TableCell align='right'>
                {/* Render a View button for tickets */}
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

export default TableTickets
