import { ColumnLayout, DisplayContainer } from 'enta';
import ISellingPointRenderer from '../../interfaces/ISellingPointRenderer';
import Model from '../../model/Model';
import BottomSellingPointRenderer from './BottomSellingPointRenderer';

export default class BottomUniqueSellingPoints extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'BottomBar';
        this.bottom = 56 + 24;
        this.percentWidth = 100;
        this.paddingX = 24;
        this.layout = new ColumnLayout(224, 6, 40, 16);
        this.addSellingPoints();
    }

    private addSellingPoints(): void {
        const sellingPointsRenderers: Array<ISellingPointRenderer> = [];
        for (const sellingPoint of Model.sellingPoints) {
            const renderer: ISellingPointRenderer = new BottomSellingPointRenderer();
            renderer.sellingPoint = sellingPoint;
            sellingPointsRenderers.push(renderer);
        }
        this.addElements(sellingPointsRenderers);
    }
}
customElements.define('bottom-unique-selling-points', BottomUniqueSellingPoints);
