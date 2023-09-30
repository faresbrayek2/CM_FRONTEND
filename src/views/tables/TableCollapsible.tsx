// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const createData = (type: string, country: string, vbv: string, price: string, expiration: string) => {
  return {
    type,
    country,
    vbv,
    price,
    expiration,
    history: [
      {
        date: '2020-01-05',
        customerId: 'seller1',
        description: 'mafihach flous'
      }
    ]
  }
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Define icons for each card type
  const cardTypeIcons: { [key: string]: React.ReactNode } = {
    Visa: <img src='/images/cards/visa.png' alt='Visa' width={25} />,
    'Master Card': <img src='/images/cards/mastercard.png' alt='MasterCard' width={25} />,
    'American Express': <img src='/images/cards/americanexpress.png' alt='American Express' width={25} />,
    Discover: <img src='/images/cards/discover.png' alt='Discover' width={25} />
  }

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell align='left' sx={{ alignItems: 'center' }}>
          {cardTypeIcons[row.type]}
          {row.type}
        </TableCell>
        <TableCell align='right'>{row.country}</TableCell>
        <TableCell align='right'>{row.price}</TableCell>

        <TableCell align='right'>{row.vbv}</TableCell>

        <TableCell align='right'>{row.expiration}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Added Date</TableCell>
                    <TableCell>Seller Number</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align='right'>Buy</TableCell>
                    <TableCell align='right'>Check</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.description}</TableCell>
                      <TableCell align='right'>
                        <Button variant='contained' color='success'>
                          Buy
                        </Button>
                      </TableCell>
                      <TableCell align='right'>
                        <Button variant='contained' color='primary'>
                          Check
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const rows = [
  createData('Visa', 'JP', '6.0', 'true', '11/2022'),
  createData('Master Card', 'FR', '9.0', 'true', '12/2022'),
  createData('American Express', 'US', '16.0', 'false', '1/2022'),
  createData('Discover', 'IN', '25', 'false', '2/2022')
]

const TableCollapsible = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Type</TableCell>
            <TableCell align='right'>Country</TableCell>
            <TableCell align='right'>VBV (true)</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Expiration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.type} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCollapsible
