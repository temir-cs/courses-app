import Button from '../Button/Button';
import './Input.css';

const Input = () => {
	return (
		<div className='search'>
			<input
				type='text'
				className='form-control search-input'
				placeholder='Search course by title or id...'
			/>
			<Button type='submit' btnStyle='info'>
				Search
			</Button>
		</div>
	);
};

export default Input;
