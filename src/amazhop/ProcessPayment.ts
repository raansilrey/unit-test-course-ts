import {Cart} from "./Cart";
import {CreditCards} from "./CreditCards.enum";

export class ProcessPayment {
    private _cart: Cart;
    private _paymentMethod: CreditCards;
    constructor(cart: Cart, paymentMethod: CreditCards) {
        this._cart = cart;
        this._paymentMethod = paymentMethod;
    }
    public authorization(): Promise<boolean> {
        return new Promise<boolean> (async (resolve) => {
            let amount: number = await this._cart.getAmount();
            let approval: boolean = await new Promise<boolean>(() => {
                let approval: boolean = this._paymentMethod - amount >= 0;
                // console.log("Approval: " + approval);
                resolve(approval);
            });
            resolve(approval);
        });
    }
}
