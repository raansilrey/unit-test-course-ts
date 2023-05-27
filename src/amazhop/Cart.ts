import {Products} from "./Products.enum";

export class Cart {
    private _products: Array<Products>;
    constructor() {
        this._products = new Array<Products>();
    }
    public addToCart(product: Products): void {
        this._products.push(product);
    }
    get products(): Array<Products> {
        return this._products;
    }
    public getAmount(): Promise<number> {
        return new Promise<number>((resolve) => {
            let amount: number = 0;
            this._products.forEach(product => {
                amount += product;
            });
            // console.log("Total: " + amount);
            resolve(amount);
        });
    }
}
