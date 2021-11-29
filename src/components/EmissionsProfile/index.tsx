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
				const response = await axios.get(
					`localhost:3000/total_emission/emission`,
					{ params }
				);

				console.log(response.data);
			} catch (err) {
				// console.tron.log(err);
			}
		}
	}

	// loadStateEmissionsRemovals() {
	//   const params = {
	//     gas: this.props.gasUsed.id,
	//     social_economic: "",
	//     territories: [this.props.territory.id],
	//     emission_type: "Remoção",
	//     year: [this.props.year, this.props.year],
	//   };

	//   $.getJSON(Routes.emission_total_emission_path(), params).then((series) => {
	//     const stateEmissionsRemovals = _.reduce(
	//       series,
	//       (mem, item) => {
	//         return mem + _.reduce(item.data, (acc, e) => (acc += e.y), 0);
	//       },
	//       0
	//     );

	//     const operator = IS_CITIES ? 1000 : 1000000;
	//     const stateEmissionsLiquid =
	//       this.state.allocatedEmissionInState -
	//       Math.abs(stateEmissionsRemovals / operator);

	//     this.setState({
	//       stateEmissionsRemovals,
	//       stateEmissionsLiquid,
	//     });
	//   });
	// }

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
						{total_allocated > 0 && (
							<SimpleChart total_allocated={total_allocated} />
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
