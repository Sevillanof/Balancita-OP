import { TableCellProps } from "@mui/material/TableCell";

declare module "@mui/material/TableCell" {
  interface TableCellProps {
    className?: string;
  }
}