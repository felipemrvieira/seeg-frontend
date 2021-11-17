import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: ol;
	width: 100%;
	/* background: #ecf0f0; */
	min-height: 75vh;
	justify-content: space-between;
	/* padding: 10px; */
`;

export const AntTabs = styled(Tabs)({
	borderBottom: '1px solid #e8e8e8',
	'& .MuiTabs-indicator': {
		backgroundColor: '#fa953a',
	},
	width: '100%',
});

export const AntTab = styled((props) => <Tab disableRipple {...props} />)(
	() => ({
		textTransform: 'none',
		flex: 1,
		minWidth: 0,
		fontSize: '18px',
		// fontWeight: theme.typography.fontWeightRegular,
		// marginRight: theme.spacing(1),
		color: 'rgba(0, 0, 0, 0.85)',
		'&:hover': {
			color: '#fa953a',

			opacity: 1,
		},
		'&.Mui-selected': {
			// color: '#1890ff',
			color: '#fa953a',
			borderBottom: '2px solid #fa953a',
			// borderBottom: '2px solid #1890ff',

			// fontWeight: theme.typography.fontWeightMedium,
		},
		'&.Mui-focusVisible': {
			backgroundColor: '#d1eaff',
		},
	})
);
