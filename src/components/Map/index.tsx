import React, { useState, useEffect, useMemo } from 'react';
import {
	MapContainer,
	TileLayer,
	ZoomControl,
	WMSTileLayer,
	Marker,
	Popup,
	useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapInfo, PositionState } from './interfaces';

const Map: React.FC<MapInfo> = ({
	activeSector,
	activeGas,
	activeYear,
	isCity,
}) => {
	const [showTiles, setShowTiles] = useState(false);
	const [popUpPosition, setPopUpPosition] = useState<PositionState>({
		lat: 0,
		lng: 0,
	});

	const [showPopUp, setShowPopUp] = useState(false);

	function MapEventsChildComponent() {
		const map = useMapEvents({
			popupclose: () => console.log('popupclose'),
			click(event) {
				const { lat, lng } = event.latlng;
				setShowPopUp(true);
				setPopUpPosition({
					lat,
					lng,
				});
			},
		});
		return null;
	}

	useEffect(() => {
		// Add delay prevent map rendering wrong tiles
		setTimeout(() => {
			setShowTiles(true);
		}, 1000);
	}, []);

	useEffect(() => {
		setShowTiles(false);
		// Add delay to re-render tiles
		setTimeout(() => {
			setShowTiles(true);
		}, 100);
	}, [isCity, activeSector, activeGas, activeYear]);

	const layerParams = `year=${activeYear} and sector_id=${activeSector?.id} and gas_id=${activeGas}`;
	// console.log(layerParams);

	const memoizedStateTile = useMemo(
		() => (
			<WMSTileLayer
				url={`https://geoserver.ecostage.com.br/geoserver/ows?cql_filter=${layerParams}`}
				layers="seeg8-br-plataform-staging:seeg8-staging-geoserver-states"
				format="image/png"
				transparent
			/>
		),
		[activeSector, activeYear, activeGas]
	);

	const memoizedCityTile = useMemo(
		() => (
			<WMSTileLayer
				url={`https://geoserver.ecostage.com.br/geoserver/ows?cql_filter=${layerParams}`}
				layers="seeg-latest-version:geoserver_cities"
				format="image/png"
				transparent
			/>
		),
		[activeSector, activeYear, activeGas]
	);

	return (
		<>
			<MapContainer
				zoomControl={false}
				center={[-18.5, -54]}
				zoom={4}
				scrollWheelZoom={false}
			>
				<MapEventsChildComponent />
				<ZoomControl position="topright" />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{showTiles && activeSector && (
					<>
						{isCity ? memoizedCityTile : memoizedStateTile}

						{/* <WMSTileLayer
							url="https://geoserver.ecostage.com.br/geoserver/ows?"
							layers="seeg-latest-version:dashboard_states-static-layer"
							format="image/png"
							transparent
						/> */}
						{/* <WMSTileLayer
							url="https://geoserver.ecostage.com.br/geoserver/ows?"
							layers="seeg-latest-version:dashboard_biomes-static-layer"
							format="image/png"
							transparent
						/> */}
					</>
				)}
				{showPopUp && (
					<Popup position={[popUpPosition.lat, popUpPosition.lng]}>
						Latitude {popUpPosition.lat}.
						<br />
						Longitude {popUpPosition.lng}.
					</Popup>
				)}
			</MapContainer>
		</>
	);
};

export default Map;
