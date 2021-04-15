import { AnchorLayout, AnchorLayoutData, ApplicationElement, Color, ILabelElement, LabelElement, TopBar } from 'enta';

export default class FjedreApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'EntaDev';
        this.backgroundColor = new Color(210, 40, 96); // blue gray 100
        this.layout = new AnchorLayout();
        window.addEventListener('load', () => {
            console.log('page loaded');
            this.addElement(new TopBar());
            this.addElement(this.versionLabel);
        });
    }

    private _versionLabel!: ILabelElement;

    private get versionLabel(): ILabelElement {
        if (!this._versionLabel) {
            this._versionLabel = new LabelElement();
            // @ts-ignore
            this._versionLabel.text = 'version: ' + window.VERSION;
            this._versionLabel.layoutData = AnchorLayoutData.centerMiddle();
        }
        return this._versionLabel;
    }
}
customElements.define('fjedre-app', FjedreApp);

// // "value": "cache-control: public,max-age=31536000,immutable"
