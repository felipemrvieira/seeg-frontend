import React, { useState, useEffect, useCallback } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';
import MapFilters from '../../components/MapFilters';
import MapYearFilter from '../../components/MapYearFilter';
import 'leaflet/dist/leaflet.css';
import api from '../../services/api';
import { MapInfoInterface } from './interfaces';
import Map from '../../components/Map';

const State: React.FC = () => {
	const [mapInfo, setMapInfo] = useState<MapInfoInterface>({
		activeLevel: 0,
		allSectorsColor: '#00a8ff',
		defaultEmissionType: 'CO2',
		defaultGas: 0,
		defaultSector: 0,
		defaultYear: 2019,
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

	// function updateMapInfo(updatedValue: MapInfoInterface) {
	// 	setMapInfo({
	// 		...mapInfo,
	// 		...updatedValue,
	// 	});
	// 	console.log(mapInfo);
	// }

	const updateMapInfo = useCallback((updatedValue) => {
		setMapInfo({
			...mapInfo,
			...updatedValue,
		});
		console.log(mapInfo);
		console.log(updatedValue);
	}, []);

	useEffect(() => {
		loadStateMapInfo();
	}, []);

	return (
		<>
			<Nav />
			<Container>
				<Map
					activeSector={activeSector()}
					activeGas={mapInfo.defaultGas}
					activeYear={mapInfo.defaultYear}
				/>
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
			<MapYearFilter
				activeYear={mapInfo.defaultYear}
				updateYear={updateMapInfo}
			/>
			<Footer />
		</>
	);
};

export default State;
