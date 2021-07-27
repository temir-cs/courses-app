import Button from '../Button/Button';
import './CourseCard.css';

const formatHoursString = (totalMinutes) => {
	const hours = Math.floor(totalMinutes / 60);
	const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
	const minutes = totalMinutes % 60;
	const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
	return `${hoursString}:${minutesString}`;
};

const CourseCard = ({
	title = 'Title here',
	description = 'Desc here',
	creationDate,
	duration,
	authors,
}) => {
	console.log('🚀 ~ file: CourseCard.jsx ~ line 19 ~ authors', authors);
	return (
		<div className='course-card'>
			<div className='course-description'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='course-details'>
				<ul className='details-list'>
					<li>
						<strong>Authors: </strong>
						{authors.join(', ')}
					</li>
					<li>
						<strong>Duration: </strong>
						{formatHoursString(duration)} hours
					</li>
					<li>
						<strong>Created: </strong>
						{creationDate}
					</li>
				</ul>
				<Button>Show course</Button>
			</div>
		</div>
	);
};

export default CourseCard;
