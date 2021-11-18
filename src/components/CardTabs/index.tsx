import React, { useState } from 'react';

import Box from '@mui/material/Box';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import { Container, AntTabs, AntTab } from './styles';
import EmissionsProfile from '../EmissionsProfile';

interface TabPanelProps {
	children: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</div>
	);
}

const CardHeader: React.FC = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Container>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '100%' }}>
					<AntTabs
						value={value}
						onChange={handleChange}
						aria-label="Ant tab"
						centered
					>
						<AntTab
							icon={<BarChartIcon />}
							iconPosition="start"
							label="Emissions Profile"
						/>
						<AntTab
							icon={<HistoryIcon />}
							iconPosition="start"
							label="Historical Emissions"
						/>
					</AntTabs>
				</Box>
				<TabPanel value={value} index={0}>
					<EmissionsProfile />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
			</Box>
		</Container>
	);
};
export default CardHeader;
