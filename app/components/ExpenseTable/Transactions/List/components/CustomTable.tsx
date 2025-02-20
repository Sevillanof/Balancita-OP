import {Table, TableCell,TableContainer,TableHead, TableRow, Paper, TableBody, TablePagination } from '@mui/material';
import CustomRow from './CustomRow';
import EmptyTable from './EmptyTable';
import { useGlobalState } from "../../../../../context/GlobalState";

export const CustomTable = () => {
  const { transactions, deleteTransaction } = useGlobalState();
 
  console.log(transactions)
  if (transactions.length <= 0)
    return (
      <EmptyTable />
    )

  return (
    <>
     <TableContainer component={Paper}>
     <Table aria-label="collapsible table">
     <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Descripcion</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Monto</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {transactions.map((transaction) => (
       
          <CustomRow key={transaction.id} {...transaction} />

      ))}

        </TableBody>
  
    </Table>
    </TableContainer>
    {/* <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} /> */}
    </>
  );
};

export default CustomTable;
