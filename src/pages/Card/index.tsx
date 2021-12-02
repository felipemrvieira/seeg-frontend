/* eslint-disable camelcase */
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import api from '../../services/api';
import {
	ParamsTypes,
	QueryTypes,
	TerritoryInfoInterface,
	BrazilInfoInterface,
	GasInterface,
} from './interfaces';
import CardHeader from '../../components/CardHeader';
import CardTabs from '../../components/CardTabs';
import { SearchProvider } from '../../Contexts';
import Loader from '../../components/Loader';

const CardPage: React.FC = () => {
	const [territoryInfo, setTerritoryInfo] = useState<TerritoryInfoInterface>({
		area: 0,
		total_population: 0,
		urban_population: 0,
		rank: undefined,
		total_allocated: 0,
		name: undefined,
		flag_url: undefined,
		id: 0,
		slug: '',
	});
	const [brazilInfo, setBrazilInfo] = useState<BrazilInfoInterface>({
		total_allocated: undefined,
	});
	const [defaultTerritory, setDefaultTerritory] = useState(0);
	const [defaultEmission, setDefaultEmission] = useState('');
	const [brazilInfoTotalAllocated, setBrazilInfoTotalAllocated] = useState(0);
	const [notAllocatedPercentage, setNotAllocatedPercentage] = useState(0);
	const [gas, setGas] = useState<GasInterface>({ id: 0, name: '', slug: '' });

	const { slug } = useParams<ParamsTypes>();
	const { search } = useLocation();
	const memoizedSearch = useMemo(() => new URLSearchParams(search), [search]);

	async function getTerritoryInfo(
		territorySlug: string,
		year: number | string | null
	) {
		const params = { year };

		try {
			const response = await api.get(`/territories/${territorySlug}/emission`, {
				params,
			});

			const {
				territory,
				non_allocated_emission_percentage,
				// brazil_emission,
				brazil_emission_total_allocated,
				gasUsed,
				defaultTerritoryId,
				defaultEmissionType,
			} = response.data;

			setTerritoryInfo(territory);
			setBrazilInfoTotalAllocated(brazil_emission_total_allocated);
			setNotAllocatedPercentage(non_allocated_emission_percentage);
			setGas(gasUsed);
			setDefaultTerritory(defaultTerritoryId);
			setDefaultEmission(defaultEmissionType);

			// console.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	// async function getTerritoryEmissionsInfo() {

	// }

	const year = Number(memoizedSearch.get('year'));
	useEffect(() => {
		getTerritoryInfo(slug, year);
	}, []);

	return territoryInfo.id > 0 && gas.id > 0 ? (
		<SearchProvider
			value={{
				slug,
				year,
				gasUsed: gas,
				isCity: false,
				territory: { id: territoryInfo.id, slug: territoryInfo.slug },
				totalAllocated: territoryInfo.total_allocated,
				allocatedEmissionInCountry: brazilInfoTotalAllocated,
				defaultTerritory,
				area: territoryInfo.area,
				totalPopulation: territoryInfo.total_population,
				defaultEmissionType: defaultEmission,
			}}
		>
			<Nav />
			<Container>
				<CardHeader
					name={territoryInfo?.name}
					flag={territoryInfo?.flag_url}
					area={territoryInfo?.area}
					total_population={territoryInfo?.total_population}
					urban_population={territoryInfo?.urban_population}
					rank={territoryInfo?.rank}
					total_allocated={territoryInfo?.total_allocated}
					allocatedEmissionInCountry={brazilInfoTotalAllocated}
					notAllocatedPercentage={notAllocatedPercentage}
				/>
				<CardTabs />
			</Container>
			<Footer />
		</SearchProvider>
	) : (
		<Loader />
	);
};

export default CardPage;
