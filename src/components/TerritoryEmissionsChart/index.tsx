import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Switch from '@mui/material/Switch';
import { Container } from './styles';
import MapYearFilterRange from '../MapYearFilterRange';

const TerritoryEmissionsChart: React.FC = () => {
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
			type: 'line',
			backgroundColor: '#f9f9f9',
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
			<p className="label">Chart Type</p>
			<div className="switches">
				<div className=" boxSwitch">
					<Switch
						checked={false}
						// onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<p>Column</p>
				</div>
				<div className=" boxSwitch">
					<Switch
						checked
						// onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<p>Stacked Column</p>
				</div>
				<div className=" boxSwitch">
					<Switch
						checked={false}
						// onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<p>Area</p>
				</div>
				<div className=" boxSwitch">
					<Switch
						checked={false}
						// onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<p>Line</p>
				</div>
			</div>
			<HighchartsReact highcharts={Highcharts} options={chartInfo} />
			<MapYearFilterRange activeYear={[2000, 2010]} />
		</Container>
	);
};
export default TerritoryEmissionsChart;
