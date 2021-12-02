import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/loader.json';
import logo from '../../assets/img/logo.png';
import { LoaderContainer } from './styles';

const Loader: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<LoaderContainer>
			<img src={logo} alt="" />
			<div className="lottie">
				<Lottie options={defaultOptions} height={400} width={400} />
			</div>
		</LoaderContainer>
	);
};

export default Loader;
