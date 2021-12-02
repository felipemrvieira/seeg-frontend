import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { SectorProps } from './interfaces';

const Sector: React.FC<SectorProps> = ({ color, title, icon }) => {
	const options = {
		chart: {
			// renderTo: this.props.container,
			type: 'column',
			height: 120,
			backgroundColor: 'none',
		},
		title: {
			text: null,
		},
		xAxis: {
			type: 'category',
			labels: {
				style: {
					color: '#444',
				},
			},
			lineColor: '#CCC',
			gridLineColor: '#CCC',
			tickColor: '#CCC',
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
			lineColor: '#CCC',
			gridLineColor: '#CCC',
			tickColor: '#CCC',
		},
		// series: [
		// 	{
		// 		name: 'Emissões',
		// 		data: this.state.seriesData,
		// 	},
		// ],
		series: [
			{
				name: 'Emissões',
				data: [131, 221, 232],
			},
		],
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:,.0f}</b>',
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					shape: 'callout',
					format: '{point.y:,.0f}',
					backgroundColor: 'rgba(0, 0, 0, 0.75)',
					style: {
						color: '#FFFFFF',
						fontSize: '10px',
						textOutline: 'none',
					},
				},
				// color: '#DC7777',
				color,
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
		<div className="sector">
			<div className="header">
				<i className={`icon ${icon}`} />
				<h3 className="title">{title}</h3>
			</div>
			<div className="infoWrapper">
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<p>Percentuais</p>
					</AccordionSummary>
					<AccordionDetails>
						<table>
							<tbody>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</tbody>
						</table>
					</AccordionDetails>
				</Accordion>
			</div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
export default Sector;
