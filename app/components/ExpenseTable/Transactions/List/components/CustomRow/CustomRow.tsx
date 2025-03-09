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
        <TableCell className="empty-cell">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>

        <TableCell className="description-cell" component="th" scope="row">
          {description}
        </TableCell>
        <TableCell className="category-cell" align="left">
          {category}
        </TableCell>
        <TableCell className="amount-cell" align="left">
          ${amount}
        </TableCell>
        <TableCell className="delete-button" align="left">
          <button
            onClick={() => deleteTransaction(id)}>
            ✕
          </button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                { filteredCategory[0].category === "Ingreso" ? `${filteredCategory[0].category}` : `Gastos ${filteredCategory[0].category} `}
              </Typography>
              <Table className="sub-table-container" size="small" aria-label="purchases">
                <TableBody >
                  {filteredCategory.map((filterTransaction) => (
                    <TableRow className="sub-table" key={id}>
                      <TableCell id="description-cell" component="th" scope="row">
                        {filterTransaction.date}
                      </TableCell>
                      <TableCell className="sub-description">{filterTransaction.description}</TableCell>
                      <TableCell align="right">
                        {filterTransaction.category}
                      </TableCell>
                      <TableCell align="right">
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
