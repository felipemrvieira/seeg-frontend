import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
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
import { MapInfo } from './interfaces';

const SelectLoader = () => (
	<ContentLoader
		style={{ width: '100%' }}
		speed={2}
		width={300}
		// height={100}
		viewBox="0 0 300 130"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		// {...props}
	>
		<rect x="51" y="8" rx="3" ry="3" width="67" height="11" />
		<rect x="123" y="8" rx="3" ry="3" width="140" height="11" />
		<rect x="132" y="30" rx="3" ry="3" width="40" height="11" />
		<rect x="194" y="66" rx="3" ry="3" width="67" height="11" />
		<rect x="51" y="66" rx="3" ry="3" width="140" height="11" />
		<rect x="96" y="85" rx="3" ry="3" width="120" height="11" />
		<rect x="96" y="115" rx="3" ry="3" width="120" height="11" />
	</ContentLoader>
);

const MapLegend: React.FC<MapInfo> = ({
	activeSector,
	activeYear,
	activeGas,
}) => {
	const [mapLegend, setMapLegend] = useState({});
	const [loading, setLoading] = useState(true);

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

	return (
		<Container>
			{loading ? (
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
			) : (
				<Box>
					<SelectLoader />
				</Box>
			)}

			{true ? (
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
			) : (
				<Box>
					<SelectLoader />
				</Box>
			)}
		</Container>
	);
};
export default MapLegend;
