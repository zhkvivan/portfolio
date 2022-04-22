import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import linkedin from '../../Pics/linkedin-icon.svg';
import github from '../../Pics/github-icon.svg';
import behance from '../../Pics/behance-icon.svg';

const Hero = () => {
	const links = [
		{
			link: 'https://www.linkedin.com/in/ivanzhukov',
			description: 'LinkedIn',
			pic: linkedin,
		},
		{
			link: 'https://github.com/zhkvivan',
			description: 'GitHub',
			pic: github,
		},
		{
			link: 'https://www.behance.net/zhkvivan',
			description: 'Behance',
			pic: behance,
		},
	];
	return (
		<div className="hero-wrap">
			<Header />
			<div className="hero-content">
				<h1>Ivan Zhukov</h1>
				<span className="description">
					Full Stack Web Developer / UX/UI Designer
				</span>
				<div className="btn">Portfolio</div>
				<div className="icons">
					{links.map((link) => {
						return (
							<div className="icons-icon">
								<a href={link.link} target="_blank">
									<img src={link.pic} alt={link.description} />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Hero;
