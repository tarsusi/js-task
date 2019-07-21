import { LinkProps } from 'react-router-dom';

export default interface INavLink extends LinkProps {
	label: string;
	large?: boolean;
	small?: boolean;
}
