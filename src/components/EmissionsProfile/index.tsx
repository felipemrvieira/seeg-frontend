import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { any } from 'prop-types';
import axios from 'axios';
import D3Map from '../D3Map';
import api from '../../services/api';

import { Container } from './styles';

const EmissionsProfile: React.FC = () => {
	const [defaultYear, setDefaultYear] = useState(2019);
	const [isCities, setIsCities] = useState(false);

	const [chartInfo2, setChartInfo2] = useState({
		chart: {
			type: 'column',
			height: 360,
			backgroundColor: 'none',
		},
		title: {
			text: null,
		},
		xAxis: {
			type: 'category',
			labels: {
				style: {
					color: '#FFF',
				},
			},
			lineColor: '#444',
			gridLineColor: '#444',
			tickColor: '#444',
		},
		yAxis: {
			title: {
				text: null,
			},
			labels: {
				style: {
					color: '#444',
				},
			},
			lineColor: '#444',
			gridLineColor: '#444',
			tickColor: '#444',
		},
		series: [
			{
				name: 'Emissões',
				// data: this.state.seriesData,
				data: [
					49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
					95.6, 54.4, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
					216.4, 194.1, 95.6, 54.4,
				],
			},
		],
		tooltip: {
			pointFormat: `{series.name}: <b>{point.y:,.0f}</b> ${
				isCities ? 'MIL ' : 'M '
			}tCO2e`,
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:,.0f}',
					shape: 'callout',
					backgroundColor: 'rgba(51, 51, 51, 0.85)',
					style: {
						color: '#FFFFFF',
						fontSize: '10px',
						textOutline: 'none',
					},
				},
				color: '#FFFFFF',
			},
		},
		credits: {
			enabled: false,
		},
		exporting: {
			enabled: false,
		},
	});

	const [chartInfo, setChartInfo] = useState({
		chart: {
			type: 'bar',
			width: 580,
			height: 85,
			backgroundColor: 'none',
		},
		title: {
			text: null,
		},
		xAxis: {
			// categories: _.keys(this.props.data),
			categories: ['Total bruto', 'Remoções'],
			lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent',
			minorTickLength: 0,
			tickLength: 0,
			labels: {
				style: {
					color: '#4E4F51',
					fontWeight: '700',
					fontStyle: 'italic',
					fontSize: '16px',
					// fontSize: APP.isMobile ? '12px' : '16px',
					fontFamily: '"Lato", sans-serif',
				},
			},
		},
		yAxis: {
			gridLineWidth: 0,
			minorGridLineWidth: 0,
			visible: false,
			title: {
				text: null,
			},
			labels: {
				enabled: false,
			},
		},
		tooltip: {
			valueDecimals: 0,
			// valueSuffix: ` ${this.props.suffix}`,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					// format: `{point.y:,.0f} ${this.props.suffix}`,
					align: 'right',
					style: {
						color: '#4E4F51',
						fontWeight: '700',
						fontStyle: 'italic',
						fontSize: '14px',
						// fontSize: APP.isMobile ? '12px' : '14px',
						fontFamily: '"Lato", sans-serif',
					},
				},
			},
			series: {
				color: '#FFF',
			},
		},
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		exporting: {
			enabled: false,
		},
		series: [
			{
				name: 'name',
				data: [1, 2],
				// name: this.props.serieName,
				// data: _.values(this.props.data),
			},
		],
	});

	// async function loadData() {
	// 	const params = {
	// 		economic_activities: [],
	// 		gas: 6,
	// 		sector: undefined,
	// 		social_economic: '',
	// 		territories: [26],
	// 		emission_type: 'CO2',
	// 		year: isCities ? [2000, 2018] : [1990, defaultYear],
	// 	};

	// 	try {
	// 		const response = await axios.get(
	// 			`localhost:3000/total_emission/emission`,
	// 			{ params }
	// 		);

	// 		console.log(response.data);
	// 	} catch (err) {
	// 		// console.tron.log(err);
	// 	}
	// }

	// useEffect(() => {
	// 	loadData();
	// }, []);

	return (
		<Container>
			<div className="infoWrapper">
				<div className="info">
					<div className="header">
						<h2>
							Estimativa de Emissões de Gases de Efeito Estufa no Brasil em{' '}
							<span>2019</span>
						</h2>
					</div>
					<div className="emissions">
						<HighchartsReact highcharts={Highcharts} options={chartInfo} />
						<div className="emissionsPercentages">
							<div className="state">PA</div>
							<div className="info">
								<div className="ranking">
									<span className="position">1ª</span>
									<div className="positionInfo">
										<div className="chart">
											<div>... ... ... ... ... ... ... ... ... ... ... ...</div>
										</div>
										<div className="label">
											Posição no ranking de emissões por estado
										</div>
									</div>
								</div>
								<div className="percentagesWrapper">
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="map">
					<D3Map />
				</div>
			</div>
			<div className="mainChart">
				<p>
					Emissões totais alocadas {!isCities ? 'no estado' : 'no município'} de{' '}
					{!isCities ? '1990' : '2000'} A {defaultYear} (
					{isCities ? 'Mil ' : 'M'}
					<span className="lowercase">t</span>CO<sub>2</sub>
					<span className="lowercase">e</span>)
				</p>
				<HighchartsReact highcharts={Highcharts} options={chartInfo2} />
			</div>
		</Container>
	);
};
export default EmissionsProfile;
