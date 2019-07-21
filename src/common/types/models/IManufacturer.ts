import IModel from './IModel';

export default interface IManufacturer {
	name: string;
	models: IModel[];
	uuid: string;
}
