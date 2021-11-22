import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './styles';

const SectorCharts: React.FC = () => (
	<Container>
		<div className="sectorsWrapper">
			<div className="sector">
				<div className="header">
					<i className="icon energy" />
					<h3 className="title">Energia</h3>
				</div>
				<table className="infoWrapper">
					<tbody>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<p>Percentuais</p>
							</AccordionSummary>
							<AccordionDetails>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</AccordionDetails>
						</Accordion>
					</tbody>
				</table>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon tree" />
					<h3 className="title">Uso da terra</h3>
				</div>
				<table className="infoWrapper">
					<tbody>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<p>Percentuais</p>
							</AccordionSummary>
							<AccordionDetails>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</AccordionDetails>
						</Accordion>
					</tbody>
				</table>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon cow" />
					<h3 className="title">Agropecuária</h3>
				</div>
				<table className="infoWrapper">
					<tbody>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<p>Percentuais</p>
							</AccordionSummary>
							<AccordionDetails>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</AccordionDetails>
						</Accordion>
					</tbody>
				</table>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon trash" />
					<h3 className="title">Resíduos</h3>
				</div>
				<table className="infoWrapper">
					<tbody>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<p>Percentuais</p>
							</AccordionSummary>
							<AccordionDetails>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</AccordionDetails>
						</Accordion>
					</tbody>
				</table>
			</div>
			<div className="sector">
				<div className="header">
					<i className="icon factory" />
					<h3 className="title">Indústria</h3>
				</div>
				<table className="infoWrapper">
					<tbody>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<p>Percentuais</p>
							</AccordionSummary>
							<AccordionDetails>
								<tr className="info">
									<td>99%</td>
									<td className="label">Transporte</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">Energia</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
								<tr className="info">
									<td>99%</td>
									<td className="label">
										Geração de Eletricidade (Serviço Público)
									</td>
								</tr>
							</AccordionDetails>
						</Accordion>
					</tbody>
				</table>
			</div>
		</div>
	</Container>
);
export default SectorCharts;
