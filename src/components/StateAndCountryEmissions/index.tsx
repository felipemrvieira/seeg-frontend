import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from './styles';

const StateAndCountryEmissions: React.FC = () => {
	const [series, setSeries] = useState([
		{
			name: 'Energia',
			y: 123,
		},
		{
			name: 'Agropecuária',
			y: 123,
		},
		{
			name: 'Processos Industriais',
			y: 123,
		},
		{
			name: 'Resíduos',
			y: 123,
		},
		{
			name: 'Mudança de Uso da Terra e Florestas',
			y: 123,
		},
	]);

	const chartInfo = {
		chart: {
			// renderTo: container,
			type: 'pie',
		},
		title: {
			text: null,
		},
		series: [
			{
				data: series,
				name: 'Emissões',
			},
		],
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>',
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				showInLegend: true,
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.0f}%',
					distance: -30,
					style: {
						fontSize: '12px',
						color: '#FFF',
						textShadow:
							'1px 1px #444, -1px -1px #444, -1px 1px #444, 1px -1px #444',
					},
				},
			},
		},
		credits: {
			enabled: false,
		},
		exporting: {
			enabled: false,
		},
	};

	return (
		<Container>
			<div className="header">
				<h2>O estado e o Brasil</h2>
				<p>
					Estes gráficos comparam a participação das principais fontes de
					emissão de GEE do estado em relação ao perfil nacional.
				</p>
			</div>
			<div className="chartWrapper">
				<div className="chart">
					<div className="chartHeader">Pará</div>
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
				<div className="chart">
					<div className="chartHeader">Brasil</div>
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
			</div>
		</Container>
	);
};
export default StateAndCountryEmissions;
