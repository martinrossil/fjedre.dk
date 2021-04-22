import IProduct from '../interfaces/vo/IProduct';

export default class Product implements IProduct {
    public title: string;
    public href: string;
    public constructor(title: string, href: string) {
        this.title = title;
        this.href = href;
    }
}
