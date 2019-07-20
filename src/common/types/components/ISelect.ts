export interface ISelectItem {
	key: string;
	value: string;
}

export interface ISelectProps {
	items: ISelectItem[];
	onSelect(item: ISelectItem): any;
	placeholder?: string;
	selectedItem: string;
}

export interface ISelectState {
	isOpen: boolean;
	selectedItem: string;
}
