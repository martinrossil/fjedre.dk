import { ApplicationElement, BoxShadowFilter, Color, IDisplayContainer, IDisplayElement } from 'enta';
import MainContainer from './components/MainContainer';
import BottomNavigation from './components/navigation/BottomNavigation';
import TopBar from './components/topbar/TopBar';
import BottomUniqueSellingPoints from './components/usp/BottomUniqueSellingPoints';
import Design from './design/Design';
import Model from './model/Model';

export default class FjedreApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'EntaDev';
        this.backgroundColor = Design.theme.colors.neutral.lightest;
        window.addEventListener('load', () => {
            this.addElements([
                this.mainContainer,
                this.topBar,
                this.bottomNavigation
            ]);
        });
    }

    protected validate(): void {
        super.validate();
        console.log(this.measuredWidth);
        if (this.measuredWidth < 1280) {
            if (!this.containsElement(this.bottomNavigation)) {
                this.addElement(this.bottomNavigation);
            }
            if (this.measuredWidth < 1024) {
                this.mainContainer.top = 64;
                this.bottomNavigation.top = NaN;
                this.bottomNavigation.bottom = 0;
                this.boxFilterOne.y = -4;
                this.boxFilterTwo.y = -2;
                if (!this.containsElement(this.bottomUniqueSellingPoints)) {
                    this.addElement(this.bottomUniqueSellingPoints);
                }
                if (this.measuredWidth < 720) {
                    this.bottomNavigation.dataProvider = Model.mobileNavigationItems;
                    if (this.measuredWidth < 512) {
                        this.bottomUniqueSellingPoints.visible = false;
                        this.mainContainer.bottom = 56;
                    } else {
                        this.bottomUniqueSellingPoints.visible = true;
                        this.mainContainer.bottom = 56 + 156 + 40;
                    }
                } else {
                    this.mainContainer.bottom = 56 + 136;
                    this.bottomNavigation.dataProvider = Model.navigationItems;
                }
            } else {
                this.mainContainer.top = 112;
                this.mainContainer.bottom = 0;
                this.bottomNavigation.top = 56;
                this.bottomNavigation.bottom = NaN;
                this.bottomNavigation.dataProvider = Model.navigationItems;
                this.boxFilterOne.y = 4;
                this.boxFilterOne.y = 2;
                if (this.containsElement(this.bottomUniqueSellingPoints)) {
                    this.removeElement(this.bottomUniqueSellingPoints);
                }
            }
        } else {
            this.mainContainer.top = 64;
            if (this.containsElement(this.bottomNavigation)) {
                this.removeElement(this.bottomNavigation);
            }
        }
    }

    private _mainContainer!: MainContainer;

    private get mainContainer(): IDisplayContainer {
        if (!this._mainContainer) {
            this._mainContainer = new MainContainer();
            this._mainContainer.top = 64;
            this._mainContainer.bottom = 0;
        }
        return this._mainContainer;
    }

    private _topBar!: TopBar;

    private get topBar(): IDisplayElement {
        if (!this._topBar) {
            this._topBar = new TopBar();
        }
        return this._topBar;
    }

    private _bottomNavigation!: BottomNavigation;

    private get bottomNavigation(): BottomNavigation {
        if (!this._bottomNavigation) {
            this._bottomNavigation = new BottomNavigation();
            this._bottomNavigation.top = 56;
            this._bottomNavigation.addFilter(this.boxFilterOne);
            this._bottomNavigation.addFilter(this.boxFilterTwo);
            this._bottomNavigation.dataProvider = Model.navigationItems;
        }
        return this._bottomNavigation;
    }

    private _bottomUniqueSellingPoints!: IDisplayContainer;

    private get bottomUniqueSellingPoints(): IDisplayContainer {
        if (!this._bottomUniqueSellingPoints) {
            this._bottomUniqueSellingPoints = new BottomUniqueSellingPoints();
        }
        return this._bottomUniqueSellingPoints;
    }

    private boxFilterOne: BoxShadowFilter = new BoxShadowFilter(0, 4, 4, NaN, new Color(0, 0, 0, 0.07));

    private boxFilterTwo: BoxShadowFilter = new BoxShadowFilter(0, 2, 2, NaN, new Color(0, 0, 0, 0.06));
}
customElements.define('fjedre-app', FjedreApp);

// // "value": "cache-control: public,max-age=31536000,immutable"
