import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import D3Map from '../D3Map';

import { Container } from './styles';

const EmissionsProfile: React.FC = () => {
	const [defaultYear, setDefaultYear] = useState(2019);
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
					</div>
				</div>
				<div className="map">
					<D3Map />
				</div>
			</div>
			<div className="mainChart">Chart</div>
		</Container>
	);
};
export default EmissionsProfile;
