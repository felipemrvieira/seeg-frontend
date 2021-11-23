import React from 'react';

import { Container } from './styles';

const StateHistoricalEmissions: React.FC = () => (
	<Container>
		<div className="header">
			<h2>Série histórica das emissões de GEE estadual</h2>
			<p>
				Este gráfico mostra a evolução histórica das emissões de GEE do estado
				por setor de atividade desde 1990.
			</p>
		</div>
		<div className="chartWrapper">
			<div className="chart">
				<p>StateHistoricalEmissions</p>
			</div>
		</div>
	</Container>
);
export default StateHistoricalEmissions;
