import type { NextPage } from 'next';
import Image from 'next/image';
import TestImage from '#assets/images/test.png';

const Home: NextPage = () => {
	return (
		<div>
			<>next</>
			<Image src={TestImage} alt="test" />
		</div>
	);
};

export default Home;
