/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { formatEmissionNumber } from '../../../utils';
import { SimpleChartProps } from './interfaces';

const SimpleChart: React.FC<SimpleChartProps> = ({ total_allocated }) => {
	const totalBruto = Math.abs(
		Math.round(
			Number(formatEmissionNumber(total_allocated).toString().split(',')[0])
		)
	);

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
				data: [totalBruto, 400],
				// name: this.props.serieName,
				// data: _.values(this.props.data),
			},
		],
	});

	return <HighchartsReact highcharts={Highcharts} options={chartInfo} />;
};
export default SimpleChart;
