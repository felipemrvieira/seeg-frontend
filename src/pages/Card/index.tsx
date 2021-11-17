import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import api from '../../services/api';
import { MapInfoInterface } from './interfaces';

const CardPage: React.FC = () => (
	<>
		<Nav />
		<Container>
			<p>sasas</p>
		</Container>
		<Footer />
	</>
);

export default CardPage;
