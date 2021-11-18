import React, { useState, useCallback } from 'react';
import Chart from 'react-apexcharts';
import D3Map from '../D3Map';

import { Container } from './styles';

const EmissionsProfile: React.FC = () => {
	const [defaultYear, setDefaultYear] = useState(2019);
	const [chartInfo, setChartInfo] = useState({
		series: [
			{
				data: [400, 430],
			},
		],
		options: {
			chart: {
				toolbar: {
					show: false,
				},
				grid: {
					show: false,
				},
				ruler: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					horizontal: true,
				},
			},
			// dataLabels: {
			// 	enabled: false,
			// },
			xaxis: {
				categories: ['South Korea', 'Canada'],
			},
			yaxis: {
				//
				// gridLineWidth: 0,
				// minorGridLineWidth: 0,
				// visible: false,
				// title: {
				// 	text: null,
				// },
				// dataLabels: {
				// 	enabled: false,
				// },
				// show: false,
				// min: 0,
			},
		},
	});

	// var chart = new Highcharts.Chart({
	//   chart: {
	//     renderTo: this.props.container,
	//     type: 'bar',
	//     width: this.props.width,
	//     height: this.props.height,
	//     backgroundColor: 'none'
	//   },
	//   title: {
	//     text: null,
	//   },
	//   xAxis: {
	//     categories: _.keys(this.props.data),
	//     lineWidth: 0,
	//     minorGridLineWidth: 0,
	//     lineColor: 'transparent',
	//     minorTickLength: 0,
	//     tickLength: 0,
	//     labels: {
	//       style: {
	//         color: '#4E4F51',
	//         fontWeight: '700',
	//         fontStyle: 'italic',
	//         fontSize: APP.isMobile ? '12px' : '16px',
	//         fontFamily: '"Lato", sans-serif'
	//       }
	//     }
	//   },
	//   yAxis: {
	//     gridLineWidth: 0,
	//     minorGridLineWidth: 0,
	//     visible: false,
	//     title: {
	//       text: null
	//     },
	//     labels: {
	//       enabled: false
	//     }
	//   },
	//   tooltip: {
	//     valueDecimals: 0,
	//     valueSuffix: ` ${ this.props.suffix }`
	//   },
	//   plotOptions: {
	//     bar: {
	//       dataLabels: {
	//         enabled: true,
	//         format: `{point.y:,.0f} ${ this.props.suffix }`,
	//         align: 'right',
	//         style: {
	//           color: '#4E4F51',
	//           fontWeight: '700',
	//           fontStyle: 'italic',
	//           fontSize: APP.isMobile ? '12px' : '14px',
	//           fontFamily: '"Lato", sans-serif'
	//         }
	//       }
	//     },
	//     series: {
	//       color: '#FFF'
	//     }
	//   },
	//   legend: {
	//     enabled: false
	//   },
	//   credits: {
	//     enabled: false
	//   },
	//   exporting: {
	//     enabled: false
	//   },
	//   series: [{
	//     name: this.props.serieName,
	//     data: _.values(this.props.data)
	//   }]
	// });

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
						<Chart
							options={chartInfo.options}
							series={chartInfo.series}
							type="bar"
							height={350}
							width={350}
						/>
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
