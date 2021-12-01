/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import D3Map from '../D3Map';
import api from '../../services/api';
import SearchContext from '../../Contexts';
import { formatEmissionNumber, formatNumber, strToNumber } from '../../utils';

import { Container } from './styles';
import { EmissionsProfileProps } from './interfaces';
import SimpleChart from './SimpleChart';
import FullChart from './FullChart';

const EmissionsProfile: React.FC = () => {
	const [defaultYear, setDefaultYear] = useState(2019);
	const [territoryRemovals, setTerritoryRemovals] = useState(0);
	const [territoryNetEmissions, setTerritoryNetEmissions] = useState(0);
	const [brasilRemovals, setBrasilRemovals] = useState(0);
	const [brasilNetEmissions, setBrasilNetEmissions] = useState(0);

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
	} = searchContext;

	const brazilArea = 8516000;
	const brazilPopulation = 207700000;

	async function loadTerritoryRemovals() {
		if (territory.id !== 0 && gasUsed.id !== 0) {
			const params = {
				gas: gasUsed.id,
				social_economic: '',
				territories: [territory.id],
				emission_type: 'Remoção',
				year: [year, year],
			};

			try {
				const response = await api.get(`/total_emission/emission`, { params });
				const series = response.data;

				const removals = series.reduce(
					(acc: any, curr: any) =>
						acc +
						curr.data.reduce((acc2: any, curr2: any) => acc2 + curr2.y, 0),
					0
				);

				setTerritoryRemovals(removals);
				const operator = isCity ? 1000 : 1000000;
				const stateEmissionsLiquid =
					totalAllocated - Math.abs(removals / operator);
				setTerritoryNetEmissions(stateEmissionsLiquid);
			} catch (err) {
				console.log(err);
			}
		}
	}

	async function loadBrazilRemovals() {
		if (territory.id !== 0 && gasUsed.id !== 0 && defaultTerritory !== 0) {
			const params = {
				gas: gasUsed.id,
				social_economic: '',
				territories: [defaultTerritory],
				emission_type: 'Remoção',
				year: [year, year],
			};

			try {
				const response = await api.get(`/total_emission/emission`, { params });
				const series = response.data;
				console.log(params);
				console.log(series.data);

				const removals = series.reduce(
					(acc: any, curr: any) =>
						acc +
						curr.data.reduce((acc2: any, curr2: any) => acc2 + curr2.y, 0),
					0
				);

				const brazilEmissionsLiquid = allocatedEmissionInCountry - removals;

				setBrasilRemovals(removals);
				setBrasilNetEmissions(brazilEmissionsLiquid);
			} catch (err) {
				console.log(err);
			}
		}
	}

	useEffect(() => {
		loadTerritoryRemovals();
		loadBrazilRemovals();
	}, [territory]);

	function parseStatePercentageData(
		baseValue: any,
		referenceValue: any,
		formatedDivisor: any,
		formatedDecimals: any
	) {
		if (!baseValue) {
			return NaN;
		}

		const baseValuePercentage = (baseValue / referenceValue) * 100;
		const baseValuePercentageFormated = formatNumber(
			baseValuePercentage,
			'.',
			'.',
			1
		);
		const baseValueFormated = formatNumber(
			baseValue / formatedDivisor,
			'.',
			'.',
			formatedDecimals
		);

		return {
			percentage: baseValuePercentageFormated,
			formatedValue: baseValueFormated,
		};
	}

	function allocatedEmissionValues() {
		return parseStatePercentageData(
			// formato esperado
			// 400.3375047,
			// 2175630937 / (isCity ? 1000 : 1000000),

			totalAllocated,
			allocatedEmissionInCountry / (isCity ? 1000 : 1000000),
			1,
			isCity ? 0 : 1
		);
	}

	function allocatedNetEmissionValues() {
		return parseStatePercentageData(
			// formato esperado
			// 249.6867967
			// 2175630937

			territoryNetEmissions,
			brasilNetEmissions / (isCity ? 1000 : 1000000),
			1,
			isCity ? 0 : 1
		);
	}

	function stateAreaValues() {
		return parseStatePercentageData(strToNumber(area), brazilArea, 1000, 0);
	}

	function statePopulationValues() {
		return parseStatePercentageData(
			// 8602865,
			totalPopulation,
			brazilPopulation,
			1000000,
			1
		);
	}

	function renderPercentageData(
		key: any,
		values: any,
		label: any,
		formatedDataUnit = ''
	) {
		return (
			<div className="percentage" key={key}>
				<span className="strong">{values?.percentage}%</span>
				<span className="strong">{label}</span>
				<span>
					{' '}
					{values?.formatedValue} {formatedDataUnit}
				</span>
			</div>
		);
	}

	function renderPercentages() {
		console.log(stateAreaValues());
		const dataProps = [
			{
				values: allocatedEmissionValues(),
				// values: { percentage: '18.4', formatedValue: '400.3' },
				label: 'da emissão bruta',
				unit: `${isCity ? 'Mil' : 'M'} tCO2e`,
			},
			{
				// values: { percentage: '18.4', formatedValue: '400.3' },
				values: allocatedNetEmissionValues(),
				label: 'da emissão líquida',
				unit: `${isCity ? 'Mil' : 'M'} tCO2e`,
			},
			{
				// values: { percentage: '18.4', formatedValue: '400.3' },
				values: statePopulationValues(),
				label: 'da população',
				unit: 'mi hab',
			},
			{
				// values: { percentage: '18.4', formatedValue: '400.3' },
				values: stateAreaValues(),
				label: 'da área',
				unit: 'mil km²',
			},
		];

		return (
			<div className="percentagesWrapper">
				{dataProps.map((item, i) =>
					renderPercentageData(i, item.values, item.label, item.unit)
				)}
			</div>
		);
	}

	return (
		<Container>
			<div className="infoWrapper">
				<div className="info">
					<div className="header">
						<h2>
							Estimativa de Emissões de Gases de Efeito Estufa no Brasil em{' '}
							<span>{year}</span>
						</h2>
					</div>
					<div className="emissions">
						{totalAllocated > 0 && territoryRemovals > 0 && (
							<SimpleChart
								totalAllocated={totalAllocated}
								territoryRemovals={territoryRemovals}
							/>
						)}
						<div className="emissionsPercentages">
							<div className="state">PA</div>
							<div className="info">
								<div className="ranking">
									<span className="position">1ª</span>
									<div className="positionInfo">
										<div className="chart">
											<div>... ... ... ... ... ... ... ... ... ... ... ...</div>
										</div>
										<div className="label">
											Posição no ranking de emissões por estado
										</div>
									</div>
								</div>
								{renderPercentages()}
							</div>
						</div>
					</div>
				</div>
				<div className="map">
					<D3Map />
				</div>
			</div>
			<div className="mainChart">
				<p>
					Emissões totais alocadas {!isCity ? 'no estado' : 'no município'} de{' '}
					{!isCity ? '1990' : '2000'} A {defaultYear} ({isCity ? 'Mil ' : 'M'}
					<span className="lowercase">t</span>CO<sub>2</sub>
					<span className="lowercase">e</span>)
				</p>
				{true && <FullChart totalAllocated={totalAllocated} />}
			</div>
		</Container>
	);
};
export default EmissionsProfile;
