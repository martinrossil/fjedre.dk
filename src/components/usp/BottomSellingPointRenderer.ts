import { DisplayContainer, HorizontalLayout, IDisplayContainer, IPathElement, ITextElement, PathElement, TextElement } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import ISellingPointRenderer from '../../interfaces/ISellingPointRenderer';
import ISellingPoint from '../../interfaces/vo/ISellingPoint';

export default class BottomSellingPointRenderer extends DisplayContainer implements ISellingPointRenderer {
    public constructor() {
        super();
        this.name = 'BottomSellingPointRenderer';
        this.height = 40;
        this.layout = new HorizontalLayout(16, 'fill', 'middle');
        this.addElements([this.iconBlock, this.textElement]);
    }

    private _iconBlock!: IDisplayContainer;

    private get iconBlock(): IDisplayContainer {
        if (!this._iconBlock) {
            this._iconBlock = new DisplayContainer();
            this._iconBlock.padding = 8;
            this._iconBlock.cornerSize = 6;
            this._iconBlock.backgroundColor = Design.theme.colors.neutral.dark;
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

    private _textElement!: ITextElement;

    private get textElement(): ITextElement {
        if (!this._textElement) {
            this._textElement = new TextElement();
            this._textElement.enabled = false;
            this._textElement.typeFace = Design.theme.typography.primaryTypeFace;
            this._textElement.fontSize = 14;
            this._textElement.fontWeight = 600;
            this._textElement.textColor = Design.theme.colors.neutral.normal;
        }
        return this._textElement;
    }

    private _sellingPoint: ISellingPoint | null = null;

    public set sellingPoint(value: ISellingPoint | null) {
        if (value) {
            this.pathElement.pathData = value.icon;
            this.textElement.text = value.title;
        }
    }

    public get sellingPoint(): ISellingPoint | null {
        return this._sellingPoint;
    }
}
customElements.define('bottom-selling-point-renderer', BottomSellingPointRenderer);
