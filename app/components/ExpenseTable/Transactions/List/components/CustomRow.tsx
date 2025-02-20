import React, { useState } from 'react';
import {Box, Collapse,IconButton, Table, TableBody, TableCell,TableContainer,TableHead, TableRow,Typography, Paper } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TableProps from '../models/table.models';
import { useGlobalState } from "../../../../../context/GlobalState";

export const CustomRow: React.FC<TableProps> = ({id, description, category, amount}) => {
  const {transactions, deleteTransaction } = useGlobalState();  
  const [open, setOpen] = useState(false)

  let filteredCategory = transactions.filter(transaction => transaction.category === category)

  return (
    <>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

      <TableCell>

        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>

      </TableCell>

      <TableCell component="th" scope="row">
        {description}
      </TableCell>
      <TableCell align="right">{category}</TableCell>
      <TableCell align="right">${amount}</TableCell>
      <TableCell align="right">
        <button
                      className="delete-button"
                      onClick={() => deleteTransaction(id)}>
                      ✕
                    </button></TableCell>
    </TableRow>

    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Gastos asociados
            </Typography>
            <Table size="small" aria-label="purchases">

              <TableBody>
              {filteredCategory.map((filterTransaction) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {filterTransaction.date}
                  </TableCell>
                  <TableCell>{filterTransaction.description}</TableCell>
                  <TableCell align="right">{filterTransaction.category}</TableCell>
                  <TableCell align="right">${filterTransaction.amount}</TableCell>
                </TableRow>
   ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
    </>
  )
}

export default CustomRow