import IColors from '../interfaces/colors/IColors';
import ITypography from '../interfaces/colors/ITypography';
import ITheme from '../interfaces/design/ITheme';
import Colors from './Colors';
import Typography from './Typography';

export default class Theme implements ITheme {
    private _colors!: IColors;

    public get colors(): IColors {
        if (!this._colors) {
            this._colors = new Colors();
        }
        return this._colors;
    }

    private _typography!: ITypography;

    public get typography(): ITypography {
        if (!this._typography) {
            this._typography = new Typography();
        }
        return this._typography;
    }
}
