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

const CardPage: React.FC = () => {
	const [territoryInfo, setTerritoryInfo] = useState<TerritoryInfoInterface>({
		area: undefined,
		total_population: undefined,
		urban_population: undefined,
		rank: undefined,
		total_allocated: undefined,
		name: undefined,
		flag_url: undefined,
		id: 0,
		slug: '',
	});
	const [brazilInfo, setBrazilInfo] = useState<BrazilInfoInterface>({
		total_allocated: undefined,
	});
	const [brazilInfoTotalAllocated, setBrazilInfoTotalAllocated] = useState(0);
	const [notAllocatedPercentage, setNotAllocatedPercentage] = useState(0);
	const [gas, setGas] = useState<GasInterface>({ id: 0, name: '', slug: '' });

	// const [emissionsInfo, setEmissionsInfo] = useState({
	// });

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
			} = response.data;

			setTerritoryInfo(territory);
			setBrazilInfoTotalAllocated(brazil_emission_total_allocated);
			setNotAllocatedPercentage(non_allocated_emission_percentage);
			setGas(gasUsed);

			console.log(territory);
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

	return (
		<SearchProvider
			value={{
				slug,
				year,
				gasUsed: gas,
				isCity: false,
				territory: { id: territoryInfo.id, slug: territoryInfo.slug },
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
				<CardTabs total_allocated={territoryInfo.total_allocated || 0} />
			</Container>
			<Footer />
		</SearchProvider>
	);
};

export default CardPage;
