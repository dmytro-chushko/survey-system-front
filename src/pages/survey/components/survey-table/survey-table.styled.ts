import styled from "@emotion/styled";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";

export const Cell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Row = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F5F5F5",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
