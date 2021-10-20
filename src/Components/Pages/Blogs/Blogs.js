import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useBlogs from '../../../Hooks/useBlogs';

const Blogs = () => {
	useEffect(() => {
		document.title = 'Blogs | Optic Repair - The Specialized Eye Care Hospital';
	}, []);
	const blogs = useBlogs();
	return (
		<div className='container my-5'>
			<div className='row row-cols-1 row-cols-md-3 g-4'>
				{blogs.map(blog => (
					<Item blog={blog} key={blog._id} />
				))}
			</div>
		</div>
	);
};

const Item = ({ blog }) => {
	const { _id, title, image, p1 } = blog;
	return (
		<div className='col'>
			<div className='card h-100 border-0 shadow'>
				<Link className='nav-link p-0 text-dark' to={'blog/' + _id}>
					<img src={image} className='card-img-top' alt={title} />
				</Link>
				<div className='card-body pb-4'>
					<h4 className='card-title'>
						<Link className='nav-link px-0 text-dark' to={'blog/' + _id}>
							{title}
						</Link>
					</h4>
					<p className='card-text'>{p1.slice(0, 150)}</p>
				</div>
				<div className='card-footer btn'>
					<span className='text-muted text-center'>
						<Link className='nav-link p-0 text-dark' to={'blog/' + _id}>
							Read more {'>>'}{' '}
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
