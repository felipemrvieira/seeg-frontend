import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	width: 100%;
	background: #ecf0f0;
	/* min-height: 75vh; */
	justify-content: center;
	padding: 32px;
	button {
		max-width: 300px;
		color: #fff;
		background: #f17506;
		border: 1px solid #f17506;
		padding: 0 2.5em;
		font-weight: 700;
		line-height: 3.125em;
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
`;
