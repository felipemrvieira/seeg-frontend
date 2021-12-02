/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FullChartProps } from './interfaces';
import SearchContext from '../../../Contexts';

const FullChart: React.FC<FullChartProps> = (data) => {
	const searchContext = useContext(SearchContext);
	const { isCity } = searchContext;

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

	return <HighchartsReact highcharts={Highcharts} options={chartInfo} />;
};
export default FullChart;
