import INavigationItem from '../interfaces/vo/INavigationItem';
import NavigationItem from '../vo/NavigationItem';
import ISellingPoint from '../interfaces/vo/ISellingPoint';
import SellingPoint from '../vo/SellingPoint';
import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../design/Icons';

export default class Model {
    private static _mobileNavigationItems: IArrayCollection<INavigationItem>;

    public static get mobileNavigationItems(): IArrayCollection<INavigationItem> {
        if (!this._mobileNavigationItems) {
            const items: Array<INavigationItem> = [
                new NavigationItem(Icons.LOGO, 'Produkter', '/produkter'),
                new NavigationItem(Icons.SCHEDULE, 'Hurtig køb', '/produkter'),
                new NavigationItem(Icons.THREE_D_ROTATION, '3D CAD', '/produkter'),
                new NavigationItem(Icons.INFO, 'Information', '/produkter'),
                new NavigationItem(Icons.CONTACT_PHONE, 'Kontakt', '/produkter')
            ];
            this._mobileNavigationItems = new ArrayCollection(items);
        }
        return this._mobileNavigationItems;
    }

    private static _navigationItems: IArrayCollection<INavigationItem>;

    public static get navigationItems(): IArrayCollection<INavigationItem> {
        if (!this._navigationItems) {
            const items: Array<INavigationItem> = [
                new NavigationItem(Icons.LOGO, 'Produkter', '/produkter'),
                new NavigationItem(Icons.THREE_D_ROTATION, '3D CAD', '/produkter'),
                new NavigationItem(Icons.SCHEDULE, 'Hurtig køb', '/produkter'),
                new NavigationItem(Icons.SETTINGS_APPLICATIONS, 'Konfigurator', '/produkter'),
                new NavigationItem(Icons.HELP_OUTLINE, 'Spørgsmål', '/produkter'),
                new NavigationItem(Icons.INFO, 'Information', '/produkter'),
                new NavigationItem(Icons.CONTACT_PHONE, 'Kontakt', '/produkter'),
                new NavigationItem(Icons.BUSINESS, 'Firmaprofil', '/produkter'),
                new NavigationItem(Icons.LANGUAGE, 'fjedre.dk', '/produkter')
            ];
            this._navigationItems = new ArrayCollection(items);
        }
        return this._navigationItems;
    }

    private static _sellingPoints: Array<ISellingPoint>;

    public static get sellingPoints(): Array<ISellingPoint> {
        if (!this._sellingPoints) {
            this._sellingPoints = [
                new SellingPoint(Icons.STORE, 'Køb af fjedre online'),
                new SellingPoint(Icons.DELIVERY_DINING, 'Dag til dag levering'),
                new SellingPoint(Icons.STARS, 'Danmark største udvalg'),
                new SellingPoint(Icons.SAVINGS, 'Mængde efter behov'),
                new SellingPoint(Icons.ASSIGNMENT, 'Specialfjedre efter opgave'),
                new SellingPoint(Icons.FONT_DOWNLOAD, 'Højeste kreditværdighed')
            ];
        }
        return this._sellingPoints;
    }
}
