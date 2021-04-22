import { DisplayContainer } from 'enta';
import LeftNavigation from './navigation/LeftNavigation';
import Products from './products/Products';
import UniqueSellingPoints from './usp/UniqueSellingPoints';

export default class MainContainer extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'MainContainer';
        this.percentWidth = 100;
        this.addElements([
            this.leftNavigation,
            this.products,
            this.uniqueSellingPoints
        ]);
    }

    protected validate(): void {
        super.validate();
        if (this.measuredWidth < 1280) {
            if (this.containsElement(this.leftNavigation)) {
                this.removeElement(this.leftNavigation);
            }
            if (this.measuredWidth < 560) {
                this.products.left = 16;
            } else {
                this.products.left = 24;
            }
        } else {
            if (!this.containsElement(this.leftNavigation)) {
                this.addElement(this.leftNavigation);
            }
            this.products.left = 244;
        }
        if (this.measuredWidth < 1024) {
            if (this.containsElement(this.uniqueSellingPoints)) {
                this.removeElement(this.uniqueSellingPoints);
            }
            if (this.measuredWidth < 560) {
                this.products.right = 16;
            } else {
                this.products.right = 24;
            }
        } else {
            if (!this.containsElement(this.uniqueSellingPoints)) {
                this.addElement(this.uniqueSellingPoints);
            }
            this._products.right = 288;
        }
    }

    private _leftNavigation!: LeftNavigation;

    private get leftNavigation(): LeftNavigation {
        if (!this._leftNavigation) {
            this._leftNavigation = new LeftNavigation();
            this._leftNavigation.width = 244;
            this._leftNavigation.top = 0;
            this._leftNavigation.bottom = 0;
            this._leftNavigation.left = 0;
        }
        return this._leftNavigation;
    }

    private _products!: Products;

    private get products(): Products {
        if (!this._products) {
            this._products = new Products();
            this._products.left = 244;
            this._products.right = 288;
            this._products.top = 0;
            this._products.bottom = 0;
        }
        return this._products;
    }

    private _uniqueSellingPoints!: UniqueSellingPoints;

    private get uniqueSellingPoints(): UniqueSellingPoints {
        if (!this._uniqueSellingPoints) {
            this._uniqueSellingPoints = new UniqueSellingPoints();
            this._uniqueSellingPoints.top = 0;
            this._uniqueSellingPoints.right = 0;
        }
        return this._uniqueSellingPoints;
    }
}
customElements.define('main-container', MainContainer);
