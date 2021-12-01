/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FullChartProps, iData, iEntry } from './interfaces';
import api from '../../../services/api';
import SearchContext from '../../../Contexts';

const FullChart: React.FC<FullChartProps> = (data) => {
	const searchContext = useContext(SearchContext);
	const {
		gasUsed,
		isCity,
		year,
		territory,
		totalAllocated,
		allocatedEmissionInCountry,
		defaultTerritory,
		area,
		totalPopulation,
		defaultEmissionType,
	} = searchContext;

	const [chartInfo] = useState({
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
				data: data.data,
				// data: [
				// 	49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
				// 	95.6, 54.4, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
				// 	216.4, 194.1, 95.6, 54.4,
				// ],
			},
		],
		tooltip: {
			pointFormat: `{series.name}: <b>{point.y:,.0f}</b> ${
				// 'MIL '
				isCity ? 'MIL ' : 'M '
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

	useEffect(() => {
		// loadData();
	}, [territory]);

	console.log(data);
	return <HighchartsReact highcharts={Highcharts} options={chartInfo} />;
	// const { data } = parsedData;

	// eslint-disable-next-line react/destructuring-assignment
	// return <div>{JSON.stringify(data.data)}</div>;
};
export default FullChart;
