import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CustomizedMenus from './Options'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


const CustomizedTables = ({ data, setData }) => {

    const deleteList = (indexLine) => {
        const newTable = data.filter((row,index) => index !== indexLine)
        setData(newTable)
    }

    const dublicate = (duplLine) => {setData([...data,duplLine])}
    

    const archiveList = (archive) => {
        data.filter((index) => console.log(index))
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Dessert (100g serving)</StyledTableCell>
                            <StyledTableCell align="center">Calories</StyledTableCell>
                            <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="center">Options</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <StyledTableRow key={index} value={index} onClick={()=>archiveList(index)}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <CustomizedMenus delete={() => deleteList(index)} dublicate={()=>dublicate(row)} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CustomizedTables;
