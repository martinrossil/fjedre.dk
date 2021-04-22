import { BoxShadowFilter, Color, DisplayContainer, HorizontalLayout, ILabelElement, LabelElement } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import Search from './Search';

export default class TopBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'TopBar';
        this.percentWidth = 100;
        this.paddingX = 24;
        this.height = 64;
        this.backgroundColor = Design.theme.colors.primary.darkest;
        this.addFilter(new BoxShadowFilter(0, 4, 4, NaN, new Color(0, 0, 0, 0.07)));
        this.addFilter(new BoxShadowFilter(0, 2, 2, NaN, new Color(0, 0, 0, 0.06)));
        this.layout = new HorizontalLayout(24, 'fill', 'middle');
        this.addElements([this.sodemann, new Search(), this.industriFjedre]);
    }

    protected validate(): void {
        super.validate();
        if (this.measuredWidth < 960) {
            if (this.containsElement(this.industriFjedre)) {
                this.removeElement(this.industriFjedre);
            }
        } else {
            if (!this.containsElement(this.industriFjedre)) {
                this.addElement(this.industriFjedre);
            }
        }
        if (this.measuredWidth < 560) {
            this.paddingX = 16;
            if (this.containsElement(this.sodemann)) {
                this.removeElement(this.sodemann);
            }
        } else {
            this.paddingX = 24;
            if (!this.containsElement(this.sodemann)) {
                this.addElementAt(this.sodemann, 0);
            }
        }
    }

    private _sodemann!: ILabelElement;

    private get sodemann(): ILabelElement {
        if (!this._sodemann) {
            this._sodemann = new LabelElement();
            this._sodemann.size(192, 24);
            this._sodemann.enabled = false;
            this._sodemann.typeFace = Design.theme.typography.primaryTypeFace;
            this._sodemann.fontSize = 33;
            this._sodemann.fontWeight = 800;
            this._sodemann.textColor = Colors.WHITE;
            this._sodemann.text = 'SODEMANN';
        }
        return this._sodemann;
    }

    private _industriFjedre!: ILabelElement;

    private get industriFjedre(): ILabelElement {
        if (!this._industriFjedre) {
            this._industriFjedre = new LabelElement();
            this._industriFjedre.size(348, 24);
            this._industriFjedre.enabled = false;
            this._industriFjedre.typeFace = Design.theme.typography.primaryTypeFace;
            this._industriFjedre.fontSize = 33;
            this._industriFjedre.fontWeight = 800;
            this._industriFjedre.textColor = Colors.WHITE;
            this._industriFjedre.text = 'INDUSTRIFJEDRE A/S';
        }
        return this._industriFjedre;
    }
}
customElements.define('top-bar', TopBar);
