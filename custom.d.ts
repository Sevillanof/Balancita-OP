
declare module "@mui/material/TableCell" {
  interface TableCellProps {
    className?: string;
    style?: React.CSSProperties;
  }
}

declare module "@mui/material/Collapse" {
  interface CollapseProps {
    unmountOnExit?: boolean;
  }
}

declare module "@mui/material/Menu" {
  interface MenuProps {
    anchorOrigin?: {
      vertical: "top" | "bottom" | "center" | "stretch";
      horizontal: "left" | "center" | "right" | "stretch";
    };
  }
}