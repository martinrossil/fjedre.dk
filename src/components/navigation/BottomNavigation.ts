import { HorizontalLayout, List } from 'enta';
import Design from '../../design/Design';
import INavigationItem from '../../interfaces/vo/INavigationItem';
import BottomNavigationRenderer from './BottomNavigationRenderer';

export default class BottomNavigation extends List<INavigationItem> {
    public constructor() {
        super();
        this.name = 'BottomNavigation';
        this.ItemRendererClass = BottomNavigationRenderer;
        this.percentWidth = 100;
        this.height = 56;
        this.backgroundColor = Design.theme.colors.primary.darkest;
        this.layout = new HorizontalLayout(0, 'fill', 'middle');
    }
}
customElements.define('bottom-navigation', BottomNavigation);
