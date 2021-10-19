import { useEffect, useState } from 'react';

const useData = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/jsonfiles/main/blogs.json'
		)
			.then(res => res.json())
			.then(data => setBlogs(data));
	}, []);

	return blogs;
};

export default useData;
