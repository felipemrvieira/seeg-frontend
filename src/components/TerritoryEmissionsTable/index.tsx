import React from 'react';
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloudDownload from '@mui/icons-material/CloudDownload';
import { Container } from './styles';

const TerritoryEmissionsTable: React.FC = () => {
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: '#797979',
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}));

	function createData(
		name: string,
		calories: number,
		fat: number,
		carbs: number,
		protein: number
	) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Processos Industriais', 159, 6.0, 24, 4.0),
		createData('Resíduos', 237, 9.0, 37, 4.3),
		createData('Energia', 262, 16.0, 24, 6.0),
		createData('Agropecuária', 305, 3.7, 67, 4.3),
		createData('Mudança de Uso da Terra e Florestas', 356, 16.0, 49, 3.9),
	];

	return (
		<Container>
			<div className="header">
				<h2>DATA TABLE</h2>
				<button
					type="button"
					onClick={() => {
						window.print();
					}}
				>
					<i>
						<CloudDownload />
					</i>
					<span>Imprimir relatório</span>
				</button>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Category</StyledTableCell>
							<StyledTableCell align="right">2000</StyledTableCell>
							<StyledTableCell align="right">2001</StyledTableCell>
							<StyledTableCell align="right">2002</StyledTableCell>
							<StyledTableCell align="right">2003</StyledTableCell>
							<StyledTableCell align="right">2004</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
							<StyledTableCell align="right">2005</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.calories}</StyledTableCell>
								<StyledTableCell align="right">{row.fat}</StyledTableCell>
								<StyledTableCell align="right">{row.carbs}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};
export default TerritoryEmissionsTable;
