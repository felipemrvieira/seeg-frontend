import styled from 'styled-components';

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
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 18px;
		h2 {
			display: inline-block;
			text-transform: uppercase;
			font-size: 28px;
			font-weight: 700;
		}
		button {
			/* max-width: 150px; */
			color: #fff;
			background: #f17506;
			border: 1px solid #f17506;
			padding: 7px 17px;
			font-size: 14px;
			font-weight: 400;
			border-radius: 2.5em;
			&:hover {
				background: #fff;
				color: #f17506;
				border: 1px solid #f17506;
			}
			i {
				margin-right: 6px;
			}
		}
	}
`;
