import { HorizontalLayout, ILabelElement, IPathElement, ItemRenderer, LabelElement, PathElement } from 'enta';
import Design from '../../design/Design';
import INavigationItem from '../../interfaces/vo/INavigationItem';

export default class NavigationItemRenderer extends ItemRenderer<INavigationItem> {
    public constructor() {
        super();
        this.name = 'NavigationItemRenderer';
        this.width = 196;
        this.height = 40;
        this.paddingX = 8;
        this.cornerSize = 6;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElements([this.pathElement, this.labelElement]);
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.size(24, 24);
            this._pathElement.fillColor = Design.theme.colors.neutral.normal;
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
            this._labelElement.textColor = Design.theme.colors.neutral.normal;
        }
        return this._labelElement;
    }

    protected dataChanged(): void {
        if (this.data) {
            this.labelElement.text = this.data.text;
            this.pathElement.pathData = this.data.icon;
        }
    }

    public initial(): void {
        if (!this.selected) {
            this.backgroundColor = null
            this.pathElement.fillColor = Design.theme.colors.neutral.normal;
            this.labelElement.textColor = Design.theme.colors.neutral.normal;
        } else {
            this.backgroundColor = Design.theme.colors.neutral.light;
            this.pathElement.fillColor = Design.theme.colors.neutral.dark;
            this.labelElement.textColor = Design.theme.colors.neutral.dark;
        }
    }

    public hover(): void {
        this.backgroundColor = Design.theme.colors.neutral.light;
    }

    public pressed(): void {
        this.backgroundColor = Design.theme.colors.neutral.light;
    }

    protected selectedChanged(): void {
        if (this.selected) {
            this.backgroundColor = Design.theme.colors.neutral.light;
            this.pathElement.fillColor = Design.theme.colors.neutral.dark;
            this.labelElement.textColor = Design.theme.colors.neutral.dark;
        } else {
            this.backgroundColor = null;
            this.pathElement.fillColor = Design.theme.colors.neutral.normal;
            this.labelElement.textColor = Design.theme.colors.neutral.normal;
        }
    }
}
customElements.define('navigation-item-renderer', NavigationItemRenderer);
