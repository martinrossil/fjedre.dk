import { DisplayContainer, VerticalLayout } from 'enta';
import ISellingPointRenderer from '../../interfaces/ISellingPointRenderer';
import Model from '../../model/Model';
import SellingPointRenderer from './SellingPointRenderer';

export default class UniqueSellingPoints extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'UniqueSellingPoints';
        this.size(264, 536);
        this.paddingTop = 24;
        this.layout = new VerticalLayout(40);
        this.addSellingPoints();
    }

    private addSellingPoints(): void {
        const sellingPointsRenderers: Array<ISellingPointRenderer> = [];
        for (const sellingPoint of Model.sellingPoints) {
            const renderer: ISellingPointRenderer = new SellingPointRenderer();
            renderer.sellingPoint = sellingPoint;
            sellingPointsRenderers.push(renderer);
        }
        this.addElements(sellingPointsRenderers);
    }
}
customElements.define('unique-selling-points', UniqueSellingPoints);
