import { List, VerticalLayout } from 'enta';
import INavigationItem from '../../interfaces/vo/INavigationItem';
import Model from '../../model/Model';
import NavigationItemRenderer from './NavigationItemRenderer';

export default class LeftNavigation extends List<INavigationItem> {
    public constructor() {
        super();
        this.name = 'LeftNavigationList';
        this.ItemRendererClass = NavigationItemRenderer;
        this.dataProvider = Model.navigationItems;
        this.layout = new VerticalLayout(16);
        this.padding = 24;
        this.selectedIndex = 0;
    }
}
customElements.define('left-navigation', LeftNavigation);
