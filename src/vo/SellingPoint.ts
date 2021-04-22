import ISellingPoint from '../interfaces/vo/ISellingPoint';

export default class SellingPoint implements ISellingPoint {
    public icon: string;
    public title: string;
    public constructor(icon: string, title: string) {
        this.icon = icon;
        this.title = title;
    }

    public toString(): string {
        return 'title: ' + this.title + ', description: ';
    }
}
