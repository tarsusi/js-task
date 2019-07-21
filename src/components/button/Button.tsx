import * as React from 'react';
import IButton from '../../common/types/components/IButton';

const Button: React.FunctionComponent<IButton> = (props) => {
	return (
		<button className={props.className} onClick={props.onClick}>
			{props.label}
		</button>
	);
};

export default Button;
