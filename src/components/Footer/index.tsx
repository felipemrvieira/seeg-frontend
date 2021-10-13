import React from 'react';
import Ecostage from './assets/ecostage.svg';

import { GreyArea, Logo, Copyright, DevelopedBy } from './styles';

const Footer: React.FC = () => (
	<GreyArea>
		<DevelopedBy>
			<span>Desenvolvimento</span>
			<a href="http://www.ecostage.com.br" target="_blank" rel="noreferrer">
				<Logo src={Ecostage} alt="logo" />
			</a>
		</DevelopedBy>
		<Copyright>© 2021 SEEG</Copyright>
	</GreyArea>
);

export default Footer;
