import { IDisplayContainer } from 'enta';
import IProduct from './vo/IProduct';

export default interface IProductRenderer extends IDisplayContainer {
    product: IProduct | null;
}
