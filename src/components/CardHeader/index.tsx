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
				<div className="mainBox">princ</div>
				<div className="subBoxes">sub</div>
			</div>
		</Container>
	);
};
export default CardHeader;
