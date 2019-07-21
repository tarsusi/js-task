import * as React from 'react';
import classnames from 'classnames';

import { ISelectProps, ISelectState, ISelectItem } from '../../common/types/components/ISelect';

class Select extends React.Component<ISelectProps, ISelectState> {
	static defaultProps: ISelectProps = {
		items: [],
		selectedItem: '',
		onSelect: () => {},
	};

	state: ISelectState = {
		isOpen: false,
		selectedItem: this.props.selectedItem,
	};

	static getDerivedStateFromProps(props: ISelectProps, state: ISelectState) {
		if (props.selectedItem !== state.selectedItem) {
			return {
				selectedItem: props.selectedItem,
			};
		}

		return null;
	}

	componentDidUpdate() {
		const { isOpen } = this.state;

		setTimeout(() => {
			if (isOpen) {
				window.addEventListener('click', this.close);
			} else {
				window.removeEventListener('click', this.close);
			}
		}, 0);
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.close);
	}

	close = () => {
		this.setState({
			isOpen: false,
		});
	};

	toggleSelect = () => {
		this.setState((prevState: ISelectState) => ({
			isOpen: !prevState.isOpen,
		}));
	};

	selectItem = (item: ISelectItem) => {
		this.setState(
			{
				isOpen: false,
				selectedItem: item.value,
			},
			() => this.props.onSelect(item),
		);
	};

	render() {
		return (
			<div className={classnames('select-wrapper', this.props.className)} onClick={this.toggleSelect}>
				<div className="select-header">
					<div className="select-title">{this.state.selectedItem || this.props.placeholder}</div>
					<div
						className={classnames('select-triangle', {
							open: this.state.isOpen,
						})}
					/>
				</div>

				{this.state.isOpen && (
					<ul className="select-option-list" onClick={(event) => event.stopPropagation()}>
						{this.props.items.map((item) => (
							<li
								className={classnames('select-option-item-wrapper', {
									selected: this.state.selectedItem === item.key,
								})}
								key={item.key}
								onClick={() => this.selectItem(item)}>
								<div className="select-option-item">{item.value}</div>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default Select;
