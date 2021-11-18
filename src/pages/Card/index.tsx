import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import api from '../../services/api';
import { MapInfoInterface } from './interfaces';
import CardHeader from '../../components/CardHeader';
import CardTabs from '../../components/CardTabs';

const CardPage: React.FC = () => (
	<>
		<Nav />
		<Container>
			<CardHeader />
			<CardTabs />
		</Container>
		<Footer />
	</>
);

export default CardPage;
