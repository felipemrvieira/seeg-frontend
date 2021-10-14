import React from 'react';
import {
	Container,
	Box,
	BoxLabel,
	BoxValue,
	BoxNote,
	Range,
	RangeGradient,
	BoxGradientNote,
} from './styles';

const MapLegend: React.FC = () => (
	<Container>
		<Box>
			{/* <header>Emissões não alocadas nos estados</header> */}
			{/* <div className="box-control__content"> */}
			<BoxLabel>Emissões não alocadas nos estados</BoxLabel>
			<BoxValue>4,80%</BoxValue>
			<BoxLabel>Total de emissões do setor</BoxLabel>
			<BoxValue>2.175.630.937</BoxValue>
			<BoxNote>Em toneladas</BoxNote>
			{/* </div> */}
		</Box>
		<Box>
			<div className="map-legend-gradient">
				<Range>
					<span>0</span>
					<span>400m</span>
				</Range>
				<RangeGradient />
				<BoxGradientNote>
					As cores do mapa representam faixas de quantidade de emissões em
					milhões de toneladas do GEE
				</BoxGradientNote>
			</div>
		</Box>
	</Container>
);

export default MapLegend;
