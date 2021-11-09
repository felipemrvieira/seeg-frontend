import React, { useState, useEffect } from 'react';
import {
	MapContainer,
	TileLayer,
	ZoomControl,
	WMSTileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
	const [isCity, setIsCity] = useState(false);
	const [showTiles, setShowTiles] = useState(false);

	useEffect(() => {
		// Add delay prevent map rendering wrong tiles
		setTimeout(() => {
			setShowTiles(true);
		}, 1000);
	}, []);

	function layerName() {
		return isCity
			? 'seeg-latest-version:geoserver_cities'
			: 'seeg8-br-plataform-staging:seeg8-staging-geoserver-states';
	}

	const layerParams = 'year=2019 and sector_id=0 and gas_id=6';
	return (
		<>
			<MapContainer
				zoomControl={false}
				center={[-18.5, -54]}
				zoom={4}
				scrollWheelZoom={false}
			>
				<ZoomControl position="topright" />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{showTiles && (
					<>
						<WMSTileLayer
							url={`https://geoserver.ecostage.com.br/geoserver/ows?cql_filter=${layerParams}`}
							layers={layerName()}
							// cql_filter="year=2020 and sector_id=0 and gas_id=6"
							format="image/png"
							transparent
						/>
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
			</MapContainer>
		</>
	);
};

export default Map;
