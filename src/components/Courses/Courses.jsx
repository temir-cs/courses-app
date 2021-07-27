import Input from '../Input/Input';
import Button from '../Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';

const getAuthorNamesById = (idList, authorsList) => {
	const authorNames = idList.map((itemId) => {
		const author = authorsList.find(({ id }) => id === itemId);
		return author.name;
	});
	return authorNames;
};

const Courses = ({ courseList, authorList }) => {
	return (
		<div className='main-content'>
			<div className='search-add-section'>
				<Input />
				<Button btnType='success'>Add Course</Button>
			</div>
			<div className='course-list'>
				{courseList.map((course) => {
					const { id, title, description, creationDate, duration, authors } =
						course;
					return (
						<CourseCard
							key={id}
							title={title}
							description={description}
							creationDate={creationDate}
							duration={duration}
							authors={getAuthorNamesById(authors, authorList)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Courses;
