import * as React from 'react';
import classnames from 'classnames';

interface Props {
	currentPage: number;
	totalPage: number;
	onChanged: (page: number) => any;
}

interface State {}

class Pagination extends React.Component<Props, State> {
	static defaultProps: Props = {
		currentPage: 1,
		totalPage: 1,
		onChanged: (page: number) => {},
	};

	toPaginationText = () => {
		const { currentPage, totalPage } = this.props;

		return `Page ${currentPage} of ${totalPage}`;
	};

	onFirstClicked = () => {
		this.props.onChanged(1);
	};

	onPreviousClicked = () => {
		if (this.props.currentPage !== 1) {
			this.props.onChanged(this.props.currentPage - 1);
		}
	};

	onNextClicked = () => {
		if (this.props.currentPage !== this.props.totalPage) {
			this.props.onChanged(this.props.currentPage + 1);
		}
	};

	onLastClicked = () => {
		this.props.onChanged(this.props.totalPage);
	};

	render() {
		const paginationText = this.toPaginationText();

		return (
			<div className="pagination-container">
				<div
					className={classnames('pagination-link', {
						disabled: this.props.currentPage === 1,
					})}
					onClick={this.onFirstClicked}>
					First
				</div>
				<div
					className={classnames('pagination-link', {
						disabled: this.props.currentPage === 1,
					})}
					onClick={this.onPreviousClicked}>
					Previous
				</div>
				<div className="pagination-pager">{paginationText}</div>
				<div
					className={classnames('pagination-link', {
						disabled: this.props.currentPage === this.props.totalPage,
					})}
					onClick={this.onNextClicked}>
					Next
				</div>
				<div
					className={classnames('pagination-link', {
						disabled: this.props.currentPage === this.props.totalPage,
					})}
					onClick={this.onLastClicked}>
					Last
				</div>
			</div>
		);
	}
}

export default Pagination;
