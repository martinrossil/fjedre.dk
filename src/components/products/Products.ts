import { ArrayCollection, ColumnLayout, List } from 'enta';
import IProduct from '../../interfaces/vo/IProduct';
import Product from '../../vo/Product';
import ProductRenderer from './ProductRenderer';

export default class Products extends List<IProduct> {
    public constructor() {
        super();
        this.name = 'Products';
        this.paddingY = 24;
        this.layout = new ColumnLayout(224, 6, 64, 16);
        this.ItemRendererClass = ProductRenderer;
        this.dataProvider = this.productItems;
    }

    private _productItems!: ArrayCollection<IProduct>;

    private get productItems(): ArrayCollection<IProduct> {
        if (!this._productItems) {
            const items: Array<IProduct> = [
                new Product('Trykfjedre', 'produkter/trykfjedre'),
                new Product('Multibølje Trykfjedre', 'produkter/multibølje-trykfjedre'),
                new Product('Koniske Trykfjedre', 'produkter/koniske-trykfjedre'),
                new Product('Værktøjsfjedre', 'produkter/værktøjsfjedre'),
                new Product('Trækfjedre', 'produkter/trækfjedre'),
                new Product('Vridfjedre / Torsionfjedre', 'produkter/vridfjedre'),
                new Product('Fortøjningsfjedre', 'produkter/fortøjningsfjedre'),
                new Product('M-strut Mekanisk Gasfjeder', 'produkter/m-strut-mekanisk-gasfjeder'),
                new Product('Gasfjedre & Gasdæmpere m. gevind', 'produkter/gasfjedre'),
                new Product('Gasfjedre Svejste Øjer Sortmalede', 'produkter/gasfjedre-svejste-øjer-sotrmalede'),
                new Product('Gasfjedre med gevind Rustfri 316 FDA godkendt', 'produkter/gasfjedre-med-gevind-rustfri-316-fda-godkendt'),
                new Product('Træk Gasfjedre', 'produkter/træk-gasfjedre'),
                new Product('End Fittings & Beslag', 'produkter/end-fittings-og-beslag'),
                new Product('Vælg selv tryk på gasfjeder', 'produkter/vælg-selv-tryk-på-gasfjeder'),
                new Product('Gasfjedre til skabe & låger', 'produkter/gasfjedre-til-skabe-og-låger'),
                new Product('Gummibælge', 'produkter/gummibælge'),
                new Product('Sikkerhedsrør til Gasfjedre', 'produkter/sikkerhedsrør-til-gasfjedre'),
                new Product('Tallerkenfjedre', 'produkter/tallerkenfjedre'),
                new Product('Støtteskiver & Passkiver', 'produkter/støtteskiver-og-passkiver'),
                new Product('Fjederskiver', 'produkter/fjederskiver'),
                new Product('Fjedertråd', 'produkter/fjedertråd'),
                new Product('Konstant Kraftfjedre', 'produkter/konstant-kraftfjedre'),
                new Product('Værktøjs Clips', 'produkter/værktøjs-clips'),
                new Product('Splitter', 'produkter/splitter'),
                new Product('Bølgefjedre i rund tråd', 'produkter/bølgefjedre-i-rund-tråd'),
                new Product('Bladfjedre', 'produkter/bladfjedre'),
                new Product('Specialfremstillede Fjedre', 'produkter/specialfremstillede-fjedre'),
                new Product('Sortiments Æsker', 'produkter/sortiments-æsker')
            ];
            this._productItems = new ArrayCollection(items);
        }
        return this._productItems;
    }
}
customElements.define('products-element', Products);
