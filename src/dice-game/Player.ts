import {Dice} from "./Dice";

export class Player {
    private dice: Dice;
    private reference: number;
    constructor(dice: Dice, reference: number) {
        this.dice = dice;
        this.reference = reference;
    }
    public play (): boolean {
        let diceNumber: number = this.dice.roll();
        return diceNumber > this.reference;
    }
}
