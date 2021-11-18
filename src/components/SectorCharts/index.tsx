import React from 'react';
import { Container } from './styles';

const SectorCharts: React.FC = () => (
	<Container>
		<div className="sectorsWrapper">
			<div className="sector">
				<div className="header">
					<i className="icon energy" />
					<h3 className="title">Energia</h3>
				</div>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon tree" />
					<h3 className="title">Uso da terra</h3>
				</div>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon cow" />
					<h3 className="title">Agropecuária</h3>
				</div>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon trash" />
					<h3 className="title">Resíduos</h3>
				</div>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon factory" />
					<h3 className="title">Indústria</h3>
				</div>
			</div>
		</div>
	</Container>
);
export default SectorCharts;
