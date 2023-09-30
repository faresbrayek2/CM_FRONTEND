import { useState, ChangeEvent } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import { React } from 'mdi-material-ui'

interface Column {
  id: 'type' | 'price' | 'expiration' | 'status' | 'createdDate' | 'actions' // Add 'status' and 'createdDate' columns
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'type', label: 'Credit Card Type', minWidth: 170 },
  { id: 'price', label: 'Price', minWidth: 100, align: 'right' },
  {
    id: 'expiration',
    label: 'Expiration Date',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  { id: 'status', label: 'Status', minWidth: 100, align: 'right' },
  { id: 'createdDate', label: 'Created Date', minWidth: 100, align: 'right' }, // Add 'createdDate' column
  { id: 'actions', label: 'Actions', minWidth: 170, align: 'right' }
]

interface Data {
  type: string
  price: string
  expiration: string
  status: string
  createdDate: string // Add 'createdDate' property
}

function createData(type: string, price: string, expiration: string, status: string, createdDate: string): Data {
  return { type, price, expiration, status, createdDate }
}

const rows = [
  createData('Visa', '100', '11/2022', 'Refunded', '2023-09-30'),
  createData('Master Card', '200', '12/2022', 'Pending', '2023-09-29'),
  createData('American Express', '150', '01/2022', 'Rejected', '2023-09-28'),
  createData('Discover', '50', '02/2022', 'Pending', '2023-09-27')
]

const TableOrders = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow
                  key={row.type}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0
                    }
                  }}
                >
                  {columns.map(column => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'actions' ? (
                          <Button variant='contained' color='primary'>
                            View
                          </Button>
                        ) : (
                          row[column.id]
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableOrders
