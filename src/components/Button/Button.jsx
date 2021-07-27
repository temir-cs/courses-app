const Button = (props) => {
	const { btnStyle = 'primary', colored = false } = props;
	return (
		<button
			className={
				colored
					? `btn btn btn-${btnStyle}`
					: `btn btn-outline btn-outline-${btnStyle}`
			}
		>
			{props.children}
		</button>
	);
};

export default Button;
