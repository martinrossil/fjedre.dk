import { AnchorLayout, DisplayContainer, IDisplayContainer, ILabelElement, IPathElement, LabelElement, PathElement } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import ISellingPointRenderer from '../../interfaces/ISellingPointRenderer';
import ISellingPoint from '../../interfaces/vo/ISellingPoint';

export default class SellingPointRenderer extends DisplayContainer implements ISellingPointRenderer {
    public constructor() {
        super();
        this.name = 'SellingPointRenderer';
        this.size(264, 40);
        this.layout = new AnchorLayout();
        this.addElements([this.iconBlock, this.labelElement]);
    }

    private _iconBlock!: IDisplayContainer;

    private get iconBlock(): IDisplayContainer {
        if (!this._iconBlock) {
            this._iconBlock = new DisplayContainer();
            this._iconBlock.padding = 8;
            this._iconBlock.cornerSize = 6;
            this._iconBlock.backgroundColor = Design.theme.colors.primary.dark;
            this._iconBlock.size(40, 40);
            this._iconBlock.addElement(this.pathElement);
        }
        return this._iconBlock;
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
            this._labelElement.fontSize = 14;
            this._labelElement.fontWeight = 600;
            this._labelElement.textColor = Design.theme.colors.primary.dark;
            this._labelElement.top = 12;
            this._labelElement.right = 16;
            this._labelElement.left = 56;
        }
        return this._labelElement;
    }

    private _sellingPoint: ISellingPoint | null = null;

    public set sellingPoint(value: ISellingPoint | null) {
        if (value) {
            this.pathElement.pathData = value.icon;
            this.labelElement.text = value.title;
        }
    }

    public get sellingPoint(): ISellingPoint | null {
        return this._sellingPoint;
    }
}
customElements.define('selling-point-renderer', SellingPointRenderer);
