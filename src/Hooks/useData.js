import { useEffect, useState } from 'react';

const useData = () => {
	const [service, setService] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/jsonfiles/main/treatment.json'
		)
			.then(res => res.json())
			.then(data => setService(data));
	}, []);

	return service;
};

export default useData;
