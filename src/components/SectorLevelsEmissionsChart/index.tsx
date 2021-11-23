import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from './styles';

const SectorLevelsEmissionsChart: React.FC = () => {
	const [series, setSeries] = useState([
		{
			name: 'Energia',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
		},
		{
			name: 'Agropecuária',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
		},
		{
			name: 'Processos Industriais',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
		},
		{
			name: 'Resíduos',
			data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
		},
		{
			name: 'Mudança de Uso da Terra e Florestas',
			data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
		},
	]);

	const chartInfo = {
		chart: {
			renderTo: 'state-historical-emissions',
			type: 'bar',
		},
		title: {
			text: null,
		},
		xAxis: {
			categories: ['Mudança', 'energia'],
		},
		yAxis: {
			title: {
				text: 'yAxisText',
			},
		},
		series,
		tooltip: {
			shared: true,
			pointFormat:
				'<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
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
				<h2>Resumo por setores</h2>
			</div>
			<div className="chartWrapper">
				<div className="sector">
					<div className="icon agro" />
					<div className="title">Setor de Agropecuária</div>
					<div className="description">
						O gráfico ao lado apresenta as emissões de GEE por atividade
						específica do Setor de Agropecuária e suas fontes de origem.
					</div>
				</div>
				<div className="chart">
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
			</div>

			<div className="chartWrapper">
				<div className="chart">
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
				<div className="sector">
					<div className="icon mut" />
					<div className="title">
						Setor de Mudança de Uso da Terra e Floresta
					</div>
					<div className="description">
						Este gráfico mostra emissões e remoções provenientes do setor de
						Mudança de Uso da Terra no estado e suas respectivas fontes.
					</div>
				</div>
			</div>
			<div className="chartWrapper">
				<div className="sector">
					<div className="icon residuos" />
					<div className="title">Setor de Resíduos</div>
					<div className="description">
						O gráfico ao lado mostra as emissões de GEE estadual por atividade
						específica do Setor de Resíduos.
					</div>
				</div>
				<div className="chart">
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
			</div>

			<div className="chartWrapper">
				<div className="chart">
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
				<div className="sector">
					<div className="icon energy" />
					<div className="title">Setor de Energia</div>
					<div className="description">
						O gráfico ao lado mostra as emissões de GEE pelos subsetores do
						Setor de Energia.
					</div>
				</div>
			</div>

			<div className="chartWrapper">
				<div className="sector">
					<div className="icon transporte" />
					<div className="title">Subsetor de Transportes</div>
					<div className="description">
						Este gráfico apresenta as emissões de GEE estadual do subsetor de
						transportes por combustível consumido..
					</div>
				</div>
				<div className="chart">
					<HighchartsReact highcharts={Highcharts} options={chartInfo} />
				</div>
			</div>
		</Container>
	);
};
export default SectorLevelsEmissionsChart;
