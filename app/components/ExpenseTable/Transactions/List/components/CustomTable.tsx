import {Table, TableCell,TableContainer,TableHead, TableRow, Paper, TableBody, TablePagination } from '@mui/material';
import CustomRow from './CustomRow';
import EmptyTable from './EmptyTable';
import { useGlobalState } from "../../../../../context/GlobalState";


export const CustomTable = () => {
  const { transactions } = useGlobalState();
 
  console.log(transactions)
  if (transactions.length <= 0)
    return (
      <EmptyTable />
    )

  return (
    <>
     <TableContainer component={Paper}>
     <Table className='table-container' aria-label="collapsible table">
     <TableHead>
          {/* <TableRow>
            <TableCell className='empty-cell' />
            <TableCell className='description-cell'>Descripcion</TableCell>
            <TableCell className='category-cell'align="right">Categoria</TableCell>
            <TableCell className='amount-cell'align="left">Monto</TableCell>
            
          </TableRow> */}
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
