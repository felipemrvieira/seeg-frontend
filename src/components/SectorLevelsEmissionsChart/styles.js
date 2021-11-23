import styled from 'styled-components';
import cow from '../../assets/img/icon-cow.svg';
import energy from '../../assets/img/icon-energy.svg';
import tree from '../../assets/img/icon-tree.svg';
import trash from '../../assets/img/icon-trash.svg';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: white;
	justify-content: space-between;
	.header {
		margin-bottom: 18px;
		color: #454e50;
		text-transform: uppercase;
		background: #eff0f0;
		padding: 40px 22px;

		h2 {
			font-weight: 700;
		}
		p {
		}
	}
	.chartWrapper {
		padding: 12px 22px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.sector {
			width: 32%;
			text-align: center;
			.icon {
				content: '';
				display: block;
				width: 60px;
				height: 60px;
				margin: 0 auto 10px;
				vertical-align: middle;
				border-radius: 30px;
				background-size: 35px 35px;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.agro {
				background-color: #f1c40f;
				background-image: url(${cow});
			}
			.transporte {
				background-color: #95a5a6;
				background-image: url(${cow});
			}
			.energy {
				background-color: #c0392b;
				background-image: url(${energy});
			}
			.residuos {
				background-color: #2980b9;
				background-image: url(${trash});
			}
			.mut {
				background-color: #2ecc71;
				background-image: url(${tree});
			}

			.title {
				font-weight: 700;
				margin-bottom: 20px;
				font-size: 32px;
			}
			.description {
			}
		}
		.chart {
			/* flex: 1; */
			/* margin: 0 12px; */
			.chartHeader {
				padding: 0.9375em 0;
				margin-bottom: 0;
				text-align: center;
				font-size: 1em;
				font-weight: 400;
				text-transform: uppercase;
				color: #444;
				background: #ecf0f0;
			}
		}
	}
`;
