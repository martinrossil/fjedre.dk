import { AnchorLayout, ApplicationElement, Color, LeftNavigationList, TopBar, UniqueSellingPoints } from 'enta';

export default class FjedreApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'EntaDev';
        this.backgroundColor = new Color(210, 40, 96); // blue gray 100
        this.layout = new AnchorLayout();
        window.addEventListener('load', () => {
            this.addElement(new TopBar());
            this.addElement(new LeftNavigationList());
            this.addElement(new UniqueSellingPoints());
        });
    }
}
customElements.define('fjedre-app', FjedreApp);

// // "value": "cache-control: public,max-age=31536000,immutable"
