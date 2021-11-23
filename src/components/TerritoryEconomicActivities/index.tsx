import React from 'react';

import { Container } from './styles';

const TerritoryEconomicActivities: React.FC = () => (
	<Container>
		<div className="header">
			<h2>Atividades Econômicas Estaduais</h2>
			<p>
				O diagrama abaixo mostra as emissões de GEE do estado por setor,
				subsetor e atividade econômica (da esquerda para a direita)
			</p>
		</div>
		<div className="chartWrapper">
			<div className="chart">
				<p>D3 Sankey chart</p>
			</div>
		</div>
	</Container>
);
export default TerritoryEconomicActivities;
