import { BoxShadowFilter, Color, DisplayContainer, HorizontalLayout, IImageElement, ImageElement, ITextElement, TextElement } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import IProductRenderer from '../../interfaces/IProductRenderer';
import IProduct from '../../interfaces/vo/IProduct';

export default class ProductRenderer extends DisplayContainer implements IProductRenderer {
    public constructor() {
        super();
        this.name = 'ProductRenderer';
        this.height = 64;
        this.backgroundColor = Colors.WHITE;
        this.cornerSize = 8;
        this.padding = 16;
        this.layout = new HorizontalLayout(16, 'fill', 'middle');
        this.addFilter(new BoxShadowFilter(0, 1, 3, 0, new Color(0, 0, 0, 0.1)));
        this.addFilter(new BoxShadowFilter(0, 1, 2, 0, new Color(0, 0, 0, 0.06)));
        this.addElements([this.image, this.textElement]);
    }

    private _image!: IImageElement;

    private get image(): IImageElement {
        if (!this._image) {
            this._image = new ImageElement();
            this._image.size(40, 40);
        }
        return this._image;
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

    private _product: IProduct | null = null;

    public set product(value: IProduct | null) {
        if (value) {
            this.image.source = value.href + '.png';
            this.textElement.text = value.title;
        }
    }

    public get product(): IProduct | null {
        return this._product;
    }
}
customElements.define('product-renderer', ProductRenderer);
