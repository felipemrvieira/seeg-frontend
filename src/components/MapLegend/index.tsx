import React, { useState, useEffect } from 'react';
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
import api from '../../services/api';

interface ActiveSector {
	slug: string;
}
interface MapInfo {
	activeSector: ActiveSector;
	activeYear: number;
	activeGas: number;
}

const MapLegend: React.FC<MapInfo> = ({
	activeSector,
	activeYear,
	activeGas,
}) => {
	const [mapLegend, setMapLegend] = useState({});

	async function getInfos() {
		console.log('getInfos');

		try {
			const params = {
				sector: activeSector.slug,
				year: activeYear,
				gas: activeGas,
				cities: false,
			};
			const response = await api.get('/map/emissions_info', { params });
			setMapLegend(response.data);
			console.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		getInfos();
	}, [activeSector, activeYear, activeGas]);

	// function getInfos(props) {
	// const params = {
	// sector: props.activeSector.slug,
	// year: props.activeYear,
	// gas: props.activeGas,
	// cities: IS_CITIES,
	// };

	// Api.getEmissionsInfo(params).done((data) => {
	//   this.setState({
	//     info: data,
	//   });
	// });
	// }

	return (
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
};
export default MapLegend;
