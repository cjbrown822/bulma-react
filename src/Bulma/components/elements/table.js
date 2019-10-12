import styled from "styled-components";
import withSize from "../higherorder/sizehoc";

export const TableContainer = styled.div.attrs(props => ({
	className: `table-container`
}))``;

export const TableHeader = styled.thead``;
export const TableFooter = styled.tfoot``;
export const TableCell = styled.td``;
export const TableCellHeading = styled.th``;
export const TableRow = styled.tr``;
export const TableBody = styled.tbody``;

const Table = styled.div.attrs(({ratio}) => ({
	className: `table ${ratio && ratio}`
}))``;

export default withSize(Table);