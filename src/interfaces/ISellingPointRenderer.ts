import { IDisplayContainer } from 'enta';
import ISellingPoint from './vo/ISellingPoint';

export default interface ISellingPointRenderer extends IDisplayContainer {
    sellingPoint: ISellingPoint | null;
}
