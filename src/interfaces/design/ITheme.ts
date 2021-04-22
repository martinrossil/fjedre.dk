import IColors from '../colors/IColors';
import ITypography from '../colors/ITypography';

export default interface ITheme {
    readonly colors: IColors;
    readonly typography: ITypography;
}
