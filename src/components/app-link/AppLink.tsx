import * as React from 'react';
import INavLink from '../../common/types/components/INavLink';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const AppLink: React.FunctionComponent<INavLink> = (props) => {
	return (
		<Link
			className={classnames('app-link', {
				large: props.large,
				small: props.small,
			})}
			to={props.to}>
			{props.label}
		</Link>
	);
};

export default AppLink;
