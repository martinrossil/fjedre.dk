import { IColor } from 'enta';
import IColorShades from '../interfaces/colors/IColorShades';

export default class ColorShades implements IColorShades {
    public lightest: IColor;
    public light: IColor;
    public normal: IColor;
    public dark: IColor;
    public darkest: IColor;

    public constructor(lightest: IColor, light: IColor, normal: IColor, dark: IColor, darkest: IColor) {
        this.lightest = lightest;
        this.light = light;
        this.normal = normal;
        this.dark = dark;
        this.darkest = darkest;
    }
}
