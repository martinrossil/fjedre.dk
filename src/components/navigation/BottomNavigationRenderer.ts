import { ILabelElement, IPathElement, ItemRenderer, LabelElement, PathElement, VerticalLayout } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import INavigationItem from '../../interfaces/vo/INavigationItem';

export default class BottomNavigationRenderer extends ItemRenderer<INavigationItem> {
    public constructor() {
        super();
        this.name = 'BottomNavigationRenderer';
        this.height = 56;
        this.paddingTop = 8;
        this.layout = new VerticalLayout(6, 'center', 'top');
        this.addElements([this.pathElement, this.labelElement]);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.pathElement.pathData = this.data.icon;
            this.labelElement.text = this.data.text;
        }
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.size(24, 24);
            this._pathElement.fillColor = Colors.WHITE;
        }
        return this._pathElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.enabled = false;
            this._labelElement.typeFace = Design.theme.typography.primaryTypeFace;
            this._labelElement.fontSize = 12;
            this._labelElement.fontWeight = 500;
            this._labelElement.textColor = Colors.WHITE;
        }
        return this._labelElement;
    }
}
customElements.define('bottom-navigation-renderer', BottomNavigationRenderer);
