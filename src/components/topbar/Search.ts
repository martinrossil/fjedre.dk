import { DisplayContainer, HorizontalLayout, ILabelElement, IPathElement, LabelElement, PathElement, Rectangle } from 'enta';
import Colors from '../../design/Colors';
import Design from '../../design/Design';
import Icons from '../../design/Icons';

export default class Search extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'Search';
        this.height = 40;
        this.percentWidth = 100;
        this.cornerSize = 8;
        this.paddingLeft = 16;
        this.layout = new HorizontalLayout(16, 'fill', 'middle');
        this.backgroundColor = Design.theme.colors.primary.dark;
        this.addElements([this.search, this.labelElement]);
    }

    private _search!: IPathElement;

    private get search(): IPathElement {
        if (!this._search) {
            this._search = new PathElement();
            this._search.size(24, 24);
            this._search.viewBox = new Rectangle(1, 1, 22, 22);
            this._search.pathData = Icons.SEARCH;
            this._search.fillColor = Colors.WHITE;
        }
        return this._search;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.fontSize = 16;
            this._labelElement.text = 'Søg efter varer her...';
            this._labelElement.textColor = Colors.WHITE;
            this._labelElement.typeFace = Design.theme.typography.primaryTypeFace;
            this._labelElement.fontWeight = 600;
        }
        return this._labelElement;
    }
}
customElements.define('search-element', Search);
