import { Color, IColor } from 'enta';
import IColors from '../interfaces/colors/IColors';
import IColorShades from '../interfaces/colors/IColorShades';
import ColorShades from './ColorShades';

export default class Colors implements IColors {
    static WHITE: IColor = new Color(0, 0, 100);
    static BLACK: IColor = new Color(0, 0, 0);

    static RED_100: IColor = new Color(0, 93, 94); // hsla(0, 93%, 94%, 1)
    static RED_300: IColor = new Color(0, 94, 82); // hsla(0, 94%, 82%, 1)
    static RED_500: IColor = new Color(0, 85, 60); // hsla(0, 84%, 60%, 1)
    static RED_600: IColor = new Color(0, 72, 51); // hsla(0, 72%, 51%, 1)
    static RED_700: IColor = new Color(0, 74, 42); // hsla(0, 74%, 42%, 1)
    static RED_900: IColor = new Color(0, 63, 31); // hsla(0, 63%, 31%, 1)

    static WARM_GRAY_100: IColor = new Color(60, 5, 96); // hsla(60, 5%, 96%, 1)
    static WARM_GRAY_200: IColor = new Color(20, 6, 90); // hsla(20, 6%, 90%, 1)
    static WARM_GRAY_300: IColor = new Color(24, 6, 83); // hsla(24, 6%, 83%, 1)
    static WARM_GRAY_500: IColor = new Color(25, 5, 45); // hsla(25, 5%, 45%, 1)
    static WARM_GRAY_600: IColor = new Color(33, 5, 32); // hsla(33, 5%, 32%, 1)
    static WARM_GRAY_700: IColor = new Color(30, 6, 25); // hsla(30, 6%, 25%, 1)
    static WARM_GRAY_900: IColor = new Color(24, 10, 10); // hsla(24, 10%, 10%, 1)

    private _background!: IColor;

    public get background(): IColor {
        if (!this._background) {
            this._background = Colors.WARM_GRAY_100;
        }
        return this._background;
    }

    private _primary!: IColorShades;

    public get primary(): IColorShades {
        if (!this._primary) {
            this._primary = new ColorShades(Colors.RED_100,
                                            Colors.RED_300,
                                            Colors.RED_500,
                                            Colors.RED_600,
                                            Colors.RED_700);
        }
        return this._primary;
    }

    private _neutral!: IColorShades;

    public get neutral(): IColorShades {
        if (!this._neutral) {
            this._neutral = new ColorShades(Colors.WARM_GRAY_100,
                                            Colors.WARM_GRAY_200,
                                            Colors.WARM_GRAY_500,
                                            Colors.WARM_GRAY_600,
                                            Colors.WARM_GRAY_900);
        }
        return this._neutral;
    }
}
