import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';
import MapFilters from '../../components/MapFilters';
import MapYearFilter from '../../components/MapYearFilter';
import 'leaflet/dist/leaflet.css';
import api from '../../services/api';
import { MapInfoInterface } from './interfaces';

const State: React.FC = () => {
	const [mapInfo, setMapInfo] = useState<MapInfoInterface>({
		activeLevel: 0,
		allSectorsColor: '#00a8ff',
		defaultEmissionType: 'CO2',
		defaultGas: 0,
		defaultSector: 0,
		defaultYear: 2020,
		sectors: [],
		emissionsTypes: [],
		gases: [],
		states: [],
	});

	async function loadStateMapInfo() {
		try {
			const response = await api.get('/map');
			setMapInfo(response.data);
			console.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	function activeSector() {
		return mapInfo && mapInfo.sectors.filter((obj) => obj.id === 0)[0];
	}

	useEffect(() => {
		loadStateMapInfo();
	}, []);

	return (
		<>
			<Nav />
			<Container>
				<MapContainer
					zoomControl={false}
					center={[-14.1403536, -53.5436177]}
					zoom={4}
					scrollWheelZoom={false}
				>
					<ZoomControl position="topright" />
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</MapContainer>
				<MapFilters
					sectors={mapInfo.sectors}
					gases={mapInfo.gases}
					activeSector={activeSector()}
					activeGas={mapInfo.defaultGas}
					activeYear={mapInfo.defaultYear}
				/>
				<MapLegend
					activeSector={activeSector()}
					activeGas={mapInfo.defaultGas}
					activeYear={mapInfo.defaultYear}
				/>
			</Container>
			<MapYearFilter />
			<Footer />
		</>
	);
};

export default State;
