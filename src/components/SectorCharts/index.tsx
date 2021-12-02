import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Sector from './Sector';
import SearchContext from '../../Contexts';
import api from '../../services/api';
import { SectorLevelsState } from './interfaces';

const SectorCharts: React.FC = () => {
	const searchContext = useContext(SearchContext);
	const {
		gasUsed,
		isCity,
		year,
		territory,
		totalAllocated,
		allocatedEmissionInCountry,
		defaultTerritory,
		area,
		totalPopulation,
		defaultEmissionType,
	} = searchContext;

	const [energyLevel, setEnergyLevel] = useState<any>({});
	const [agricultureLevel, setAgricultureLevel] = useState(0);
	const [landUseChangeLevel, SetLandUseChangeLevel] = useState(0);
	const [wasteLevel, setWasteLevel] = useState(0);
	const [factoryLevel, setFactoryLevel] = useState(0);

	async function loadSectorLevels() {
		console.log(territory);
		if (territory.id !== 0 && gasUsed.id !== 0) {
			console.log('entrou');
			const params = {
				year,
				cities: isCity,
			};

			try {
				const response = await api.get(`/territories/${territory.slug}/card`, {
					params,
				});
				console.log(response.data);
				setEnergyLevel(response.data.energyLevels);
				setAgricultureLevel(response.data.agricultureLevels);
				SetLandUseChangeLevel(response.data.landUseChangeLevels);
				setWasteLevel(response.data.wasteLevels);
				setFactoryLevel(response.data.factoryLevels);
			} catch (error) {
				console.log(error);
			}
		}
	}

	const eLevels = {
		active_level: 'level_3',
		level_2: energyLevel[2]?.levels.map((item: any) => item.id),
		level_3: energyLevel[3]?.levels.map((item: any) => item.id),
	};

	async function loadData() {
		if (
			defaultEmissionType &&
			gasUsed.id !== 0 &&
			eLevels.level_2 !== undefined
		) {
			const params = {
				sector_emissions_params: {
					gas: gasUsed.id,
					levels: eLevels,
					sector: 'energia',
					social_economic: '',
					states: [territory.id],
					territory_type: isCity ? 'city' : 'state',
					emission_type: defaultEmissionType,
					year: isCity ? [2000, 2018] : [1990, year],
				},
			};

			console.log(params);
			try {
				const response = await api.get(`/sectors/${'energia'}/emission`, {
					params,
				});
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}

			//

			// $.getJSON(this.props.url, params).then((series) => {
			//   this.setState({
			//     loading: false,
			//   });

			//   let data = {};
			//   _.each(series, (serie) => {
			//     _.each(serie.data, (entry) => {
			//       if (data[entry.name]) {
			//         data[entry.name] += entry.y;
			//       } else {
			//         data[entry.name] = entry.y;
			//       }
			//     });
			//   });
			//   const parsedData = _.map(_.keys(data), (key) => {
			//     return { name: key, y: data[key] / (IS_CITIES ? 1000 : 1000000) };
			//   });
			//   const lastEntryYearKey = _.last(_.keys(data));
			//   const lastEntryYearValue = _.last(_.values(data));

			//   const tableData = _.map(series, (serie) => {
			//     const data = _.find(serie.data, { name: parseInt(lastEntryYearKey) });
			//     const value = (data.y / lastEntryYearValue) * 100;
			//     return { name: serie.name, value: formatNumber(value, ".", ",", 1) };
			//   });
			//   const filteredTableData = _.filter(tableData, (item) => {
			//     return item.value != "0,0";
			//   });
			//   const sortedTableData = _.sortBy(tableData, (item) => {
			//     return -strToNumber(item.value);
			//   });

			// const seriesData = [
			//   _.first(parsedData),
			//   parsedData[parseInt(parsedData.length / 2) - 1],
			//   _.last(parsedData),
			// ];

			// const sectorParticipationInState =
			//   (_.last(parsedData).y / this.props.allocatedEmissionInState) * 100;

			// this.setState(
			//   {
			//     loading: false,
			//     seriesData,
			//     tableData: sortedTableData,
			//     visibleTableData: sortedTableData.slice(0, 3),
			//     sectorParticipationInState: !IS_CITIES
			//       ? Math.round(sectorParticipationInState)
			//       : null,
			//   },
			//   () => {
			//     callback();
			//   }
			// );
			// });
		}
	}
	useEffect(() => {
		loadSectorLevels();
	}, []);

	useEffect(() => {
		loadData();
	}, [defaultEmissionType, gasUsed, eLevels]);

	return (
		<Container>
			<div className="sectorsWrapper">
				<Sector icon="energy" title="Energia" color="#DC7777" />
				<Sector icon="tree" title="Uso da Terra" color="#84CBA2" />
				<Sector icon="cow" title="Agropecuária" color="#D0CF70" />
				<Sector icon="trash" title="Resíduos" color="#76C6DE" />
				<Sector icon="factory" title="Indústria" color="#F8963C" />
			</div>
		</Container>
	);
};
export default SectorCharts;
