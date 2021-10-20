import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useBlogs from '../../Hooks/useBlogs';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';

const Blog = () => {
	const blogs = useBlogs();
	const { id } = useParams();
	const item = blogs.find(blog => blog._id === id);
	useEffect(() => {
		document.title = item?.title;
	}, [item?.title]);
	return (
		<div>
			<Container>
				<Link to='/' className='nav-link text-dark'>
					<FcHome className='pe-1 fs-1' />
					Back to Home
				</Link>
				<div
					style={{ margin: '50px auto' }}
					className='d-flex align-items-center justify-content-center'>
					<div className='shadow rounded overflow-hidden'>
						<Row xs={1} lg={2}>
							<Col>
								<img src={item?.image} alt='' width='100%' height='100%' />
							</Col>
							<Col className='p-5'>
								<h3>{item?.title}</h3>
								<hr />
								<h5>{item?.h1}</h5>
								<p className='text-muted'>{item?.p1}</p>
								<h5>{item?.h2}</h5>
								<p className='text-muted'>{item?.p2}</p>
								<h5>{item?.h3}</h5>
								<p className='text-muted'>{item?.p3}</p>
							</Col>
						</Row>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
