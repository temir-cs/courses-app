import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
	return (
		<div className='Header'>
			<Logo />
			<div>
				<span className='userName btn' disabled>
					Dave
				</span>
				<Button btnStyle='danger' colored>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default Header;
