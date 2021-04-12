import { ApplicationElement } from 'enta';

export default class FjedreApp extends ApplicationElement {
    public constructor() {
        super();
        console.log('FjedreApp constructor()');
    }
}
customElements.define('fjedre-app', FjedreApp);
