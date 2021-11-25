/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';
import MapYearFilter from '../MapYearFilter';
import { CardHeaderProps } from './interfaces';
import { Container } from './styles';

const CardHeader: React.FC<CardHeaderProps> = ({
	year = 2020,
	rank = 'NOT INFORMED',
	total_population = 'NOT INFORMED',
	urban_population = 'NOT INFORMED',
	area = 'NOT INFORMED',
	total_allocated = 'NOT INFORMED',
	allocatedEmissionInCountry = 'NOT INFORMED',
	notAllocatedPercentage = 'NOT INFORMED',
	name = 'Territory',
	flag = 'flag',
}) => {
	const [defaultYear, setDefaultYear] = useState(2019);

	const updatDefaultYear = useCallback((updatedValue) => {
		setDefaultYear(updatedValue);
	}, []);

	return (
		<Container>
			<header>
				<img
					src={`https://s3-sa-east-1.amazonaws.com/seeg.ecostage.com.br/flags${flag}`}
					alt="flag"
				/>
				<h1>
					{name} - {year}
				</h1>
			</header>
			<div className="boxes">
				<div className="mainBoxContainer">
					<div className="mainBox">
						<div className="info">
							<span>AREA (KM2):</span>
							<p>{area?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
						</div>
						<div className="info">
							<span>TOTAL POPULATION:</span>
							<p>
								{total_population
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							</p>
						</div>
						<div className="info">
							<span>URBAN POPULATION:</span>
							<p>
								{urban_population
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							</p>
						</div>
						<div className="info">
							<span>RANKING:</span>
							<p>{rank}</p>
						</div>
					</div>
				</div>
				<div className="subBoxesContainer">
					<div className="content">
						<div className="subBox">
							<span className="label">
								GROSS EMISSIONS ALLOCATED IN THE STATE
							</span>
							<span className="value">
								{Math.round(Number(total_allocated))
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							</span>
						</div>
						<div className="subBox">
							<span className="label">GROSS EMISSIONS IN THE COUNTRY</span>
							<span className="value">
								{' '}
								{Math.round(Number(allocatedEmissionInCountry))
									?.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							</span>
						</div>
						<div className="subBox">
							<span className="label">EMISSIONS NOT ALLOCATED IN A STATE</span>
							<span className="value">
								{Number(notAllocatedPercentage).toFixed(2)}%
							</span>
						</div>
					</div>
					<p>
						The presented emissions and ranking were calculated using the gas
						CO2e (t) GWP-AR5.
					</p>
				</div>
			</div>
			<MapYearFilter activeYear={year} updateYear={updatDefaultYear} />
		</Container>
	);
};
export default CardHeader;
