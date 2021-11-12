import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import axios from 'axios';
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
import { MapInfo, IMapLegend } from './interfaces';
import { formatNumber } from '../../utils';

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
	const [mapLegend, setMapLegend] = useState<IMapLegend>({
		allocated_in_country: '',
		biggest_state_emission: '',
		non_allocated: '',
	});
	const [loading, setLoading] = useState(true);

	async function getInfos() {
		try {
			const params = {
				sector: activeSector.slug,
				year: activeYear,
				gas: activeGas,
				cities: false,
			};

			let API_URL;

			if (process.env.NODE_ENV === 'production') {
				API_URL = 'https://plataforma.seeg.eco.br';
			} else {
				API_URL = 'http://localhost:3000';
			}
			const response = await axios.get(`${API_URL}/map/emissions_info`, {
				params,
			});
			setMapLegend(response.data);
			setLoading(false);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	useEffect(() => {
		getInfos();
	}, [activeSector, activeYear, activeGas]);

	const maxEmission = parseInt(
		mapLegend.biggest_state_emission.replace(/\./g, ''),
		10
	);

	return (
		<Container>
			{loading ? (
				<Box>
					<SelectLoader />
				</Box>
			) : (
				<Box>
					{/* <header>Emissões não alocadas nos estados</header> */}
					{/* <div className="box-control__content"> */}
					<BoxLabel>Emissões não alocadas nos estados</BoxLabel>
					<BoxValue>{mapLegend.non_allocated}</BoxValue>
					<BoxLabel>Total de emissões do setor</BoxLabel>
					<BoxValue>{mapLegend.allocated_in_country}</BoxValue>
					<BoxNote>Em toneladas</BoxNote>
					{/* </div> */}
				</Box>
			)}

			{loading ? (
				<Box>
					<SelectLoader />
				</Box>
			) : (
				<Box>
					<div className="map-legend-gradient">
						<Range>
							<span>0</span>
							<span>{formatNumber(maxEmission, '.', ',', 0)}</span>
						</Range>
						<RangeGradient sectorSlug={activeSector.slug} />
						<BoxGradientNote>
							As cores do mapa representam faixas de quantidade de emissões em
							milhões de toneladas do GEE
						</BoxGradientNote>
					</div>
				</Box>
			)}
		</Container>
	);
};
export default MapLegend;
