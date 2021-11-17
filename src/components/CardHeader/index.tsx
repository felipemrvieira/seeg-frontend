import React from 'react';

import { Container } from './styles';

const CardHeader: React.FC = () => {
	console.log('ads');

	return (
		<Container>
			<header>
				<img
					src="https://s3-sa-east-1.amazonaws.com/seeg.ecostage.com.br/flags/15.jpg"
					alt="flag"
				/>
				<h1>Pará - 2020</h1>
			</header>
			<div className="boxes">
				<div className="mainBoxContainer">
					<div className="mainBox">
						<div className="info">
							<span>AREA (KM2):</span>
							<p>NOT INFORMED</p>
						</div>
						<div className="info">
							<span>TOTAL POPULATION:</span>
							<p>NOT INFORMED</p>
						</div>
						<div className="info">
							<span>URBAN POPULATION:</span>
							<p>NOT INFORMED</p>
						</div>
						<div className="info">
							<span>RANKING:</span>
							<p>NOT INFORMED</p>
						</div>
					</div>
				</div>
				<div className="subBoxesContainer">
					<div className="content">
						<div className="subBox">
							<span className="label">
								GROSS EMISSIONS ALLOCATED IN THE STATE
							</span>
							<span className="value">0</span>
						</div>
						<div className="subBox">
							<span className="label">
								GROSS EMISSIONS ALLOCATED IN THE STATE
							</span>
							<span className="value">0</span>
						</div>
						<div className="subBox">
							<span className="label">
								GROSS EMISSIONS ALLOCATED IN THE STATE
							</span>
							<span className="value">0</span>
						</div>
					</div>
					<p>
						The presented emissions and ranking were calculated using the gas
						CO2e (t) GWP-AR5.
					</p>
				</div>
			</div>
		</Container>
	);
};
export default CardHeader;
