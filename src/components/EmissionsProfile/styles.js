import styled from 'styled-components';

export const Container = styled.div`
	color: white;
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: #ecf0f0;
	/* min-height: 75vh; */
	justify-content: space-between;
	padding: 40px 22px;
	background-color: #dc7777;
	.infoWrapper {
		display: flex;
		flex-direction: row;
		.info {
			/* width: 50%; */
			flex: 1;
			.header {
				/* max-width: 480px; */

				h2 {
					text-transform: uppercase;
					font-weight: 300;
					font-size: 36px;
					color: white;
					font-family: 'Lato', sans-serif;
					display: inline-block;
				}
				span {
					display: inline-block;
					font-weight: 700;
				}
			}
			.emissions {
				.emissionsPercentages {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-bottom: 18px;
					.state {
						font-size: 80px;
						font-weight: 700;
						margin-right: 20px;
					}
					.info {
						.ranking {
							display: flex;
							flex-direction: row;
							.position {
								display: flex;
								justify-content: center;
								width: 60px;
								height: 60px;
								font-size: 30px;
								font-weight: 700;
								text-align: center;
								line-height: 52px;
								color: white;
								border-radius: 30px;
								border: 4px solid white;
							}
							.positionInfo {
								.chart {
									margin-left: 10px;
								}
								.label {
									text-transform: uppercase;
									font-weight: 700;
									font-size: 12px;
									color: white;

									max-width: 200px;
									margin-bottom: 0;
									margin-left: 10px;
									text-transform: uppercase;
									font-weight: 700;
									font-size: 12px;
									color: white;
								}
							}
						}
						.percentagesWrapper {
							display: flex;
							flex-direction: column;
							margin-top: 10px;
							.percentage {
								span {
									font-size: 14px;
								}
								span + span {
									margin-left: 10px;
								}
								.strong {
									font-weight: 700;
								}
							}
						}
					}
				}
			}
		}
		.map {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			/* width: 50%; */
		}
	}
	.mainChart {
		background: linear-gradient(to right, #c5696a, #dc7777);
		overflow-x: scroll;
		width: 100%;
		padding: 20px;
		&::-webkit-scrollbar {
			width: 10px;
			height: 10px;
		}
		&::-webkit-scrollbar-thumb {
			background: white;

			border-radius: 25px;
		}
		&::-webkit-scrollbar-thumb:hover {
			background: #b3afb3;
		}
		&::-webkit-scrollbar-track {
			background: #dc7777;
			border-radius: 0px;
			box-shadow: inset 0px 0px 0px 0px #f0f0f0;
		}
		p {
			text-transform: uppercase;
			font-size: 14px;
			color: white;
		}
	}
`;
