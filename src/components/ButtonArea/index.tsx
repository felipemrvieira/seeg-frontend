import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import { Container } from './styles';

const ButtonArea: React.FC = () => (
	<Container>
		<button
			type="button"
			onClick={() => {
				window.print();
			}}
		>
			<i>
				<PrintIcon />
			</i>
			<span>Imprimir relatório</span>
		</button>
	</Container>
);
export default ButtonArea;
