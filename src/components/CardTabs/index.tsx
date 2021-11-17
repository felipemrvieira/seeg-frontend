import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import { Container, AntTabs, AntTab } from './styles';

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
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
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
					{/* <Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						centered
					>
						<Tab
							icon={<BarChartIcon />}
							iconPosition="start"
							label="Emissions Profile"
							{...a11yProps(0)}
						/>
						<Tab
							icon={<HistoryIcon />}
							iconPosition="start"
							label="Historical Emissions"
							{...a11yProps(1)}
						/>
					</Tabs> */}
					<AntTabs
						value={value}
						onChange={handleChange}
						aria-label="ant example"
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
					Item One
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
			</Box>
		</Container>
	);
};
export default CardHeader;
