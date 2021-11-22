import styled from 'styled-components';
import cow from '../../assets/img/icon-cow-dark.svg';
import energy from '../../assets/img/icon-energy-dark.svg';
import factory from '../../assets/img/icon-factory-dark.svg';
import tree from '../../assets/img/icon-tree-dark.svg';
import trash from '../../assets/img/icon-trash-dark.svg';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: #ecf0f0;
	/* min-height: 75vh; */
	justify-content: space-between;
	padding: 40px 22px;
	background-color: #eff0f0;
	.sectorsWrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.sector {
			flex: 1;
			position: relative;
			padding: 0 8px 18px;

			.header {
				/* overflow: wrap; */
				/* height: 60px; */
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				align-items: center;
				.icon {
					/* float: left;
					margin-right: -60px; */
					/* display: inline-block; */
					/* vertical-align: middle; */
					width: 60px;
					height: 60px;
					background-size: 60px 60px;
				}
				.cow {
					background-image: url(${cow});
				}
				.tree {
					background-image: url(${tree});
				}
				.trash {
					background-image: url(${trash});
				}
				.factory {
					background-image: url(${factory});
				}
				.energy {
					background-image: url(${energy});
				}
				.title {
					/* display: inline-block; */
					/* max-width: 120px; */
					/* vertical-align: middle; */
					/* margin-left: 75px; */
					margin-bottom: 18px;
					text-transform: uppercase;
					font-weight: 300;
					font-size: 24px;
					overflow-wrap: break-word;
				}
			}
			.infoWrapper {
				padding: 2px 0;
				/* margin-left: 70px; */
				margin-top: 0;
				margin-bottom: 18px;
				.info {
					font-size: 10px;
					.label {
						padding: 7.5px 0 7.5px 10px;
					}
				}
			}
		}
	}
`;
