import {beforeEach, describe, expect, it, test} from "@jest/globals";
import {instance, mock, when} from "ts-mockito";

import {ProcessPayment} from "../../src/amazhop/ProcessPayment";
import {Cart} from "../../src/amazhop/Cart";
import {CreditCards} from "../../src/amazhop/CreditCards.enum";
import {Products} from "../../src/amazhop/Products.enum";

let globalCart: Cart;

beforeEach(() => {
    globalCart = new Cart();
    globalCart.addToCart(Products.AVOCADO_CASE);
    globalCart.addToCart(Products.BALL);
    globalCart.addToCart(Products.PAN);
    globalCart.addToCart(Products.BOXES);
    globalCart.addToCart(Products.DESK);
    globalCart.addToCart(Products.BACKPACK);
    globalCart.addToCart(Products.BATTERIES);
    globalCart.addToCart(Products.CHAIR);
    globalCart.addToCart(Products.COFFEE_MACHINE);
    globalCart.addToCart(Products.GLASSES);
    globalCart.addToCart(Products.NOTEBOOK);
    globalCart.addToCart(Products.PEN_DRIVE);
    globalCart.addToCart(Products.PET_BED);
    globalCart.addToCart(Products.PILLOW);
    globalCart.addToCart(Products.T_SHIRT);
    globalCart.addToCart(Products.SECURITY_BOX);
});

describe("It will verify if payment is accepted or declined", () => {
    test("If the payment with AMEX was accepted", () => {
        let cart: Cart = new Cart();
        cart.addToCart(Products.AVOCADO_CASE);
        cart.addToCart(Products.BALL);
        cart.addToCart(Products.PAN);
        cart.addToCart(Products.BOXES);
        cart.addToCart(Products.DESK);
        cart.addToCart(Products.BACKPACK);
        cart.addToCart(Products.BATTERIES);
        cart.addToCart(Products.CHAIR);
        cart.addToCart(Products.COFFEE_MACHINE);
        cart.addToCart(Products.GLASSES);
        cart.addToCart(Products.NOTEBOOK);
        cart.addToCart(Products.PEN_DRIVE);
        cart.addToCart(Products.PET_BED);
        cart.addToCart(Products.PILLOW);
        cart.addToCart(Products.T_SHIRT);
        cart.addToCart(Products.SECURITY_BOX);
        let processPayment: ProcessPayment = new ProcessPayment(cart, CreditCards.AMEX);

        return processPayment.authorization().then(approval => {
            expect(approval).toBe(true);
        });
    });

    test("If the payment with BANAMEX was accepted", () => {
        let mockedCart: Cart = mock(Cart);
        when(mockedCart.getAmount()).thenReturn(new Promise<number>((resolve) => resolve(800)));
        let cart: Cart = instance(mockedCart);
        let processPayment: ProcessPayment = new ProcessPayment(cart, CreditCards.BANAMEX);

        return processPayment.authorization().then(approval => {
            expect(approval).toBe(true);
        });
    });

    it("If the payment with HSBC was accepted", () => {
        let processPayment: ProcessPayment = new ProcessPayment(globalCart, CreditCards.HSBC);

        return processPayment.authorization().then(approval => {
            expect(approval).toBe(false);
        });
    });
});
