import React from 'react';
import Masonry from 'react-masonry-css';
import './CV.css';

const CV = () => {
	const experience = [
		{
			date: '2017 - Current',
			employer: 'Self employed',
			positionName: 'UX/UI Designer / Front End Web Developer',
			bulletPoints: [
				'Created custom websites by harnessing HTML, CSS and JS skills',
				'Delivered front-end development across mobile and web applications',
				'Designed and created eye-catching, functional, intuitive websites, continually exceeding client expectations',
				'Worked closely with other developers and designers to create cohesive finished product using ReactJS and Figma',
			],
		},
		{
			date: '2013 - 2017',
			employer: 'Self employed',
			positionName: 'Computer Service and Repair Technician',
			bulletPoints: [
				'Diagnosed and repaired hardware defects',
				'Designed custom-built desktop system',
				'Trained two junior technicians in rapid troubleshooting',
			],
		},
	];

	const skills = [
		{
			name: 'ReactJS',
			description: 'Creating full stack applications using all latest features',
		},
		{
			name: 'NodeJS ExpressJS',
			description: 'Creating backend using one of the most common frameworks',
		},
		{
			name: 'PostgreSQL',
			description: 'Creating data bases and connecting them with backend',
		},
		{
			name: 'Figma Photoshop',
			description: 'Creating designs following modern trends',
		},
		{
			name: 'Git Github',
			description: 'Using a system version control. Ability to work in a team',
		},
		{
			name: 'Agile',
			description: 'Working experience in the Agile enviroment',
		},
		{
			name: 'Client-oriented approach',
			description:
				'During my work as a freelancer, I often communicate with clients about the projects. Thanks to this, I managed to develop good communication skills',
		},
	];

	const breakponts = {
		deafult: 2,
		1100: 1,
	};
	return (
		<div className=" container">
			<Masonry
				breakpointCols={breakponts}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				<div className="cv-box experience">
					<h2>Experience</h2>
					{experience.map((workplace) => {
						return (
							<div className="workplace-wrap">
								<div className="workplace-date">
									<span className="workplace-date-year">{workplace.date}</span>
									<span className="workplace-date-employer">
										{workplace.employer}
									</span>
								</div>
								<div className="workplace-description">
									<h3>{workplace.positionName}</h3>
									<ul>
										{workplace.bulletPoints.map((point) => {
											return <li className="workplace-point">{point}</li>;
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
				<div className="cv-box skills">
					<h2>Skills</h2>
					<div className="skills-wrap">
						{skills.map((skill) => {
							return (
								<div className="skills-skill">
									<span className="skills-name">{skill.name}</span>
									<span className="skills-description">
										{skill.description}
									</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className="cv-box education">
					<h2>Education</h2>
					<div className="education-wrap">
						<div className="workplace-date">
							<span className="workplace-date-year">2021 - 2022</span>
							<span className="workplace-date-employer">CodeYourFuture</span>
						</div>
						<div className="workplace-description">
							<h3>Full Stack Web Development</h3>
							<p>
								During my training in CodeYourFuture I mastered my skills at
								technologies such as: HTML, CSS, JS, ReactJS, NodeJS, ExpressJS.{' '}
							</p>
							<p>
								As part of CodeYourFuture, I worked as a developer on a full
								stack web application. Our team (1 Product Manager and 3 Devs)
								used Agile working methods during this project and managed to
								successfully deliver the finished product
							</p>
						</div>
					</div>
				</div>
			</Masonry>
		</div>
	);
};

export default CV;
