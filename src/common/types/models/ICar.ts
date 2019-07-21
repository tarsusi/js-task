import IMileage from './IMileage';

export default interface ICar {
	color: string;
	fuelType: string;
	manufacturerName: string;
	mileage: IMileage;
	modelName: string;
	pictureUrl: string;
	stockNumber: number;
}
