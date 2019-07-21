import * as React from 'react';
import ILogo from '../../common/types/components/ILogo';
import { APP_LOGO_ALT, APP_LOGO_SRC } from '../../common/constants/generalConstants';

const Logo: React.FunctionComponent<ILogo> = (props) => {
	return (
		<img
			className={props.className}
			onClick={props.onClick}
			src={props.src}
			height={props.height}
			alt={props.alt}
		/>
	);
};

Logo.defaultProps = {
	alt: APP_LOGO_ALT,
	height: 32,
	src: APP_LOGO_SRC,
};

export default Logo;
