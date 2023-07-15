import Header from '../../components/Header/Header'

// export default function ManageEmployees() {
//   return (
//     <>
//       <div className="manageEmployees__header">
//         <Header />
//       </div>
//       <main></main>
//     </>
//   )
// }

import * as React from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'

import TextField from '@mui/material/TextField'

import { useState } from 'react'

function Search() {
  console.log('Tada')
  const [isResult, setIsResult] = useState(true)
}

// import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function createData(
  firstName,
  lastName,
  startDate,
  department,
  dateOfBirth,
  street,
  city,
  state,
  zipCode,
) {
  return {
    lastName,
    firstName,
    startDate,
    department,
    dateOfBirth,
    street,
    city,
    state,
    zipCode,
  }
}

const rows = [
  createData(
    'KJalie',
    'Fudith',
    '15/08/2001',
    'GackerRoad',
    '20/02/6999',
    'TOneheim',
    'Gloscoui',
    'Purtipa',
    885585944,
  ),
  createData(
    'Salie',
    'Gudith',
    '15/05/2001',
    'DackerRoad',
    '20/12/6999',
    'POneheim',
    'Gloscouf',
    'Gurtipa',
    885415944,
  ),
  createData(
    'Malie',
    'Sudith',
    '15/07/2001',
    'SackerRoad',
    '20/11/6999',
    'Zneheim',
    'Gloscouf',
    'Furtipa',
    885775944,
  ),
  createData(
    'Aalie',
    'Mudith',
    '15/03/2001',
    'AackerRoad',
    '10/09/6999',
    'Oneheim',
    'Gloscouxc',
    'Hurtipa',
    8855944,
  ),
  createData(
    'Falie',
    'Ludith',
    '15/07/2001',
    'SackerRoad',
    '20/09/6999',
    'Qneheim',
    'Gloscouxs',
    'Qurtipa',
    998855944,
  ),
  createData(
    'Balie',
    'Vudith',
    '15/09/2001',
    'FackerRoad',
    '20/01/6999',
    'Gneheim',
    'Hloscouc',
    'Prtipa',
    856855944,
  ),
  createData(
    'Calie',
    'Dudith',
    '15/12/2001',
    'SackerRoad',
    '20/05/6899',
    'Dneheim',
    'Tloscou',
    'Trtipa',
    885555944,
  ),
  createData(
    'Xalie',
    'Qudith',
    '15/11/2001',
    'XackerRoad',
    '10/05/6999',
    'OPneheim',
    'SGloscou',
    'Jurtipa',
    885755944,
  ),
  createData(
    'Nalie',
    'Nudith',
    '15/05/2001',
    'HackerRoad',
    '20/05/6997',
    'Oneheim',
    'Ploscou',
    'Gfrtipa',
    889655944,
  ),
  createData(
    'Jalie',
    'Oudith',
    '15/08/2001',
    'MackerRoad',
    '21/05/6999',
    'Hneheim',
    'Sloscou',
    'Gdetipa',
    748855944,
  ),
  createData(
    'Qalie',
    'Eudith',
    '15/08/2001',
    'MackerRoad',
    '20/01/6999',
    'Rneheim',
    'Dloscou',
    'Gdetipa',
    885855944,
  ),
  createData(
    'Walie',
    'Rudith',
    '15/08/2001',
    'EackerRoad',
    '20/06/6999',
    'Fneheim',
    'Hloscou',
    'Gaqtipa',
    899855944,
  ),
  createData(
    'Salie',
    'Audith',
    '15/08/2001',
    'AackerRoad',
    '20/05/6999',
    'Sneheim',
    'Oloscou',
    'Gkotipa',
    998855944,
  ),
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  {
    id: 'firstName',
    numeric: false,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: false,
    disablePadding: true,
    label: 'Last Name',
  },

  {
    id: 'startDate',
    numeric: false,
    disablePadding: false,
    label: 'Start Date',
  },
  {
    id: 'department',
    numeric: false,
    disablePadding: false,
    label: 'Department',
  },
  {
    id: 'dateOfBirth',
    numeric: false,
    disablePadding: false,
    label: 'Birth Date',
  },
  {
    id: 'street',
    numeric: false,
    disablePadding: false,
    label: 'Street',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'state',
    numeric: false,
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'zipCode',
    numeric: true,
    disablePadding: false,
    label: 'Zip Code',
  },
]

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
      className="manageEmployees__table--bg"
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Employees
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : // (
      //   <Tooltip title="Filter list">
      //     <IconButton>
      //       <FilterListIcon />
      //     </IconButton>
      //   </Tooltip>
      // )
      null}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

export default function ManageEmployees() {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('firstName')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.lastName)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, lastName) => {
    const selectedIndex = selected.indexOf(lastName)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, lastName)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked)
  // }

  const isSelected = (lastName) => selected.indexOf(lastName) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  )

  return (
    <>
      <header className="layout__header">
        <Header />
      </header>
      <section className="manageEmployees__banner">
        <div className="manageEmployees__banner--title">List of employees</div>
      </section>
      <main className="manageEmployees__container">
        <div className="manageEmployees__search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
            onChange={() => {
              Search()
            }}
          />
          {/* <TextField
            error
            id="outlined-error-helper-text"
            fullWidth
            label="Error"
            // defaultValue="Hello World"
            helperText="No Result."
            onChange={() => {
              Search()
            }}
            // className={({ isResult }) =>
            //   isResult ? 'seachField--hidden' : 'searchField--visible'
            // }
          /> */}
        </div>
        <div className="manageEmployees__table">
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  className="manageEmployees__table--bg"
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.lastName)
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.lastName)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.lastName}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                          className="manageEmployees__table--bg"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.lastName}
                          </TableCell>
                          <TableCell align="right">{row.firstName}</TableCell>
                          <TableCell align="right">{row.startDate}</TableCell>
                          <TableCell align="right">{row.department}</TableCell>
                          <TableCell align="right">{row.dateOfBirth}</TableCell>
                          <TableCell align="right">{row.street}</TableCell>
                          <TableCell align="right">{row.city}</TableCell>
                          <TableCell align="right">{row.state}</TableCell>
                          <TableCell align="right">{row.zipCode}</TableCell>
                        </TableRow>
                      )
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                className="manageEmployees__table--bg"
              />
            </Paper>
            {/* <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            /> */}
          </Box>
        </div>
      </main>
    </>
  )
}
