import { ITypeFace, TypeFace } from 'enta';
import ITypography from '../interfaces/colors/ITypography';

export default class Typography implements ITypography {
    private _primaryTypeFace!: ITypeFace;

    public get primaryTypeFace(): ITypeFace {
        if (!this._primaryTypeFace) {
            this._primaryTypeFace = new TypeFace('Inter', 0.727, 0.09, 0.0);
        }
        return this._primaryTypeFace;
    }
}
