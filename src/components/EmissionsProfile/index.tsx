/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import D3Map from '../D3Map';
import api from '../../services/api';
import SearchContext from '../../Contexts';
import { formatEmissionNumber } from '../../utils';

import { Container } from './styles';
import { EmissionsProfileProps } from './interfaces';
import SimpleChart from './SimpleChart';
import FullChart from './FullChart';

const EmissionsProfile: React.FC<EmissionsProfileProps> = ({
	total_allocated,
}) => {
	const [defaultYear, setDefaultYear] = useState(2019);
	const [removals, setRemovals] = useState(0);
	const [netEmissions, setNetEmissions] = useState(0);

	const searchContext = useContext(SearchContext);
	const { gasUsed, isCity, year, territory } = searchContext;

	async function loadStateRemovals() {
		if (territory.id !== 0 && gasUsed.id !== 0) {
			const params = {
				gas: gasUsed.id,
				social_economic: '',
				territories: [territory.id],
				emission_type: 'Remoção',
				year: [year, year],
			};

			console.log(params);

			try {
				const response = await api.get(`/total_emission/emission`, { params });

				// console.log(response.data);

				const series = response.data;

				const territoryRemovals = series.reduce(
					(acc: any, curr: any) =>
						acc +
						curr.data.reduce((acc2: any, curr2: any) => acc2 + curr2.y, 0),
					0
				);

				setRemovals(territoryRemovals);
				const operator = isCity ? 1000 : 1000000;
				const stateEmissionsLiquid =
					total_allocated - Math.abs(territoryRemovals / operator);
				setNetEmissions(stateEmissionsLiquid);
			} catch (err) {
				console.log(err);
			}
		}
	}

	useEffect(() => {
		loadStateRemovals();
	}, [territory]);

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
						{total_allocated > 0 && removals > 0 && (
							<SimpleChart
								total_allocated={total_allocated}
								removals={removals}
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
								<div className="percentagesWrapper">
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
									<div className="percentage">
										<span className="strong">15.2%</span>
										<span className="strong">da emissão bruta</span>
										<span>299.5 M tCO2e</span>
									</div>
								</div>
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
				{true && <FullChart total_allocated={total_allocated} />}
			</div>
		</Container>
	);
};
export default EmissionsProfile;
