/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
// import * as d3 from 'd3';
// import { geoEqualEarth, geoPath } from 'd3-geo';
// import { feature } from 'topojson-client';

import { Container } from './styles';

const D3Map: React.FC = () => {
	// const [size] = useState({
	// 	width: 450,
	// 	height: 450,
	// });

	// const projection = geoEqualEarth()
	// .scale(160)
	// .translate([ 800 / 2, 450 / 2 ])

	useEffect(() => {
		// const svg = d3
		// 	.select('#infographic-map')
		// 	.append('svg')
		// 	.attr('width', size.width)
		// 	.attr('height', size.height);
		// const g = svg.append('g');
		// const projection = geoEqualEarth()
		// 	// .mercator()
		// 	.scale(600)
		// 	.center([-55, -15])
		// 	.translate([size.width / 2, size.height / 2]);
		// const path = geoPath().projection(projection);
		// fetch('http://localhost:3000/br-states.json').then((response) => {
		// 	if (response.status !== 200) {
		// 		// console.log(`There was a problem: ${response.status}`);
		// 	}
		// console.log(response.body);
		// response.json().then((shp) => {
		// const states = feature(shp, shp.objects.estados);
		// console.log(states);
		// 	g.selectAll('.estado')
		// 		.data(states.features)
		// 		.enter()
		// 		.append('path')
		// 		.attr('d', path)
		// 		.attr(
		// 			'id',
		// 			(d) =>
		// 				// if (d.id === this.props.territoryAcronym) {
		// 				// 	return 'active-state-on-map';
		// 				// }
		// 				null
		// 		)
		// 		.style(
		// 			'fill',
		// 			(d) =>
		// 				// if (d.id === this.props.territoryAcronym) {
		// 				// 	return 'white';
		// 				// }
		// 				'url(#diagonalHatch) #DC7777'
		// 		);
		// });
		// });
		// });
		//   $.getJSON("/br-states.json").then((shp) => {
		//     const states = topojson.feature(shp, shp.objects.estados);
		//     g.selectAll(".estado")
		//       .data(states.features)
		//       .enter()
		//       .append("path")
		//       .attr("d", path)
		//       .attr("id", (d) => {
		//         if (d.id === this.props.territoryAcronym) {
		//           return "active-state-on-map";
		//         } else {
		//           return null;
		//         }
		//       })
		//       .style("fill", (d) => {
		//         if (d.id === this.props.territoryAcronym) {
		//           return "white";
		//         } else {
		//           return "url(#diagonalHatch) #DC7777";
		//         }
		//       });
		//   });
		// }
	}, []);

	return <Container>D3 Map</Container>;
};
export default D3Map;
