import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomizedMenus from "./Options";
import { useNavigate, useLocation } from "react-router-dom";
import { remove, actionPostHeandler } from "./FetchHeandler";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useEffect, useState } from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    cursor: 'pointer'
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

const CustomizedTables = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataTable, setDataTable] = useState([])
  const [dataOrder, setDataOrder] = useState('ASC')


  useEffect(() => {
    const loadList = [];

    for (let key in data) {
      loadList.push({
        id: key,
        name: data[key].name,
        calories: data[key].calories,
        fat: data[key].fat,
        carbs: data[key].carbs,
        protein: data[key].protein,
      });
    } setDataTable(loadList)
  }, [data])


  const deleteHeandler = async (indexLine) => {
    const confirm = window.confirm("Are you shure???");
    if (confirm) {
      await remove(
        indexLine,
        location.pathname === "/" ? "/list" : location.pathname,
        "DELETE"
      );
      navigate(location.pathname);
    }
  };

  const dublicate = async (row) => {
    await actionPostHeandler(
      row,
      location.pathname === "/" ? "/list" : location.pathname
    );
    navigate(location.pathname);
  };

  const edit = (id) => {
    navigate(location.pathname === "/" ? "/list" + '/' + id : location.pathname + '/' + id)
  };

  const favoriteHeandler = (row) => {
    actionPostHeandler(row, "/favorite");
  };

  const archiveHeandler = async (row, id) => {
    await actionPostHeandler(row, "/archive");
    deleteHeandler(id)
  }

  const sortNumber = (column) => {
    if (dataOrder === 'ASC') {
      const sorted = [...dataTable].sort((a, b) => {
        return a[column] - b[column]
      })
      setDataTable(sorted)
      setDataOrder('DSC')
    }
    if (dataOrder === 'DSC') {
      const sorted = [...dataTable].sort((a, b) => {
        return b[column] - a[column]
      })
      setDataTable(sorted)
      setDataOrder('ASC')
    }
  }

  const sortName = (column) => {
    if (dataOrder === 'ASC') {
      const sorted = [...dataTable].sort((a, b) => {
        if (a[column].toLowerCase() > b[column].toLowerCase()) {
          return 1
        } else return -1
      })
      setDataTable(sorted)
      setDataOrder('DSC')
    }
    if (dataOrder === 'DSC') {
      const sorted = [...dataTable].sort((a, b) => {
        if (a[column].toLowerCase() < b[column].toLowerCase()) {
          return 1
        } else return -1
      })
      setDataTable(sorted)
      setDataOrder('ASC')
    }

  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" onClick={() => sortName('name')}>
                Dessert (100g serving)
                <SwapVertIcon />
              </StyledTableCell>
              <StyledTableCell align="center" onClick={() => sortNumber('calories')}>Calories<SwapVertIcon /></StyledTableCell>
              <StyledTableCell align="center" onClick={() => sortNumber('fat')}>Fat&nbsp;(g)<SwapVertIcon /></StyledTableCell>
              <StyledTableCell align="center" onClick={() => sortNumber('carbs')}>Carbs&nbsp;(g)<SwapVertIcon /></StyledTableCell>
              <StyledTableCell align="center" onClick={() => sortNumber('protein')}>Protein&nbsp;(g)<SwapVertIcon /></StyledTableCell>
              <StyledTableCell align="center" onClick={() => sortNumber('options')}>Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row) => (
              <StyledTableRow key={location.pathname === "/" ? "/list" + row.id : location.pathname + row.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <StyledTableCell align="center">
                  <CustomizedMenus
                    edit={() => edit(row.id)}
                    delete={() => deleteHeandler(row.id)}
                    dublicate={() => dublicate(row)}
                    favorite={() => favoriteHeandler(row)}
                    archive={() => archiveHeandler(row, row.id)}
                  />
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
