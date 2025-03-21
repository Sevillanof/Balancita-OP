import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import TableProps from "../../models/table.models";
import { useGlobalState } from "../../../../../../context/GlobalState";
import "./CustomRow.css";

export const CustomRow: React.FC<TableProps> = ({
  id,
  description,
  category,
  amount,
}) => {
  const { transactions, deleteTransaction } = useGlobalState();
  const [open, setOpen] = useState(false);

  let filteredCategory = transactions.filter(
    (transaction) => transaction.category === category
  );

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{width: "0px"}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>

        <TableCell sx={{width: "42%", fontSize: "1.2rem "}} component="th" scope="row">
          {description}
        </TableCell>
        <TableCell sx={{width: "22%", fontSize: "0.8rem "}} align="left">
          {category}
        </TableCell>
        <TableCell sx={{ fontSize: "1.3rem", textAlign: "center"}} align="left">
          ${amount}
        </TableCell>
        <TableCell sx={{width: "0%", fontSize: "1.2rem "}} align="left">
          <button
          className="delete-button"
            onClick={() => deleteTransaction(id)}>
            ✕
          </button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit={true}>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                { filteredCategory[0].category === "Ingreso" ? `${filteredCategory[0].category}` : `Gastos ${filteredCategory[0].category} `}
              </Typography>
              <Table sx={{ width: "550px", marginLeft: "auto",border: 'none' }} size="small" aria-label="purchases">
                <TableBody >
                  {filteredCategory.map((filterTransaction) => (
                    <TableRow sx={{
                      width: '100% ',
                      border: 'none'
                     }} key={id}>
                      <TableCell sx={{width: "20%", fontSize: "0.9rem "}} component="th" scope="row">
                        {filterTransaction.date}
                      </TableCell>
                      <TableCell sx={{width: "35%", fontSize: "1rem "}}>{filterTransaction.description}</TableCell>
                      <TableCell sx={{width: "25%", fontSize: "1rem "}} align="right">
                        {filterTransaction.category}
                      </TableCell>
                      <TableCell sx={{width: "20%", fontSize: "1rem "}}align="right">
                        ${filterTransaction.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CustomRow;
