import { BoxShadowFilter, Color, HorizontalLayout, IColor, IImageElement, ImageElement, ItemRenderer, ITextElement, TextElement } from 'enta';
import { Cursor } from 'enta/dist/enums/Cursor';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import IProduct from '../../interfaces/vo/IProduct';

export default class ProductRenderer extends ItemRenderer<IProduct> {
    public constructor() {
        super();
        this.name = 'ProductRenderer';
        this.cursor = Cursor.POINTER;
        this.height = 64;
        this.backgroundColor = Colors.WHITE;
        this.cornerSize = 8;
        this.padding = 16;
        this.layout = new HorizontalLayout(16, 'fill', 'middle');
        this.addFilter(this.boxOne);
        this.addFilter(this.boxTwo);
        this.addElements([this.image, this.textElement]);
    }

    private boxColorOne: IColor = new Color(0, 0, 0, 0.1);
    private boxColorTwo: IColor = new Color(0, 0, 0, 0.06);
    private boxOne: BoxShadowFilter = new BoxShadowFilter(0, 1, 3, 0, this.boxColorOne);
    private boxTwo: BoxShadowFilter = new BoxShadowFilter(0, 1, 2, 0, this.boxColorTwo);

    public initial(): void {
        this.backgroundColor = Colors.WHITE;
        this.boxColorOne.opacity = 0.1;
        this.boxColorTwo.opacity = 0.06;
    }

    public hover(): void {
        this.backgroundColor = Design.theme.colors.neutral.light;
        this.boxColorOne.opacity = 0.1;
        this.boxColorTwo.opacity = 0.06;
    }

    public pressed(): void {
        this.backgroundColor = Colors.WHITE;
        this.boxColorOne.opacity = 0.0;
        this.boxColorTwo.opacity = 0.0;
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

    protected dataChanged(): void {
        if (this.data) {
            this.image.source = this.data.href + '.png';
            this.image.alt = this.data.title;
            this.textElement.text = this.data.title;
        }
    }
}
customElements.define('product-renderer', ProductRenderer);
