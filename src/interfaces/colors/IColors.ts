import { IColor } from 'enta';
import IColorShades from './IColorShades';

export default interface IColors {
    readonly background: IColor;
    readonly primary: IColorShades;
    readonly neutral: IColorShades;
}
