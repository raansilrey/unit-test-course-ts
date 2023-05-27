export class Dice {
    private sides: number;
    constructor(sides: number) {
        this.sides = sides;
    }
    public roll (): number {
        return Math.random() * (this.sides - 2) + 2;
    }
}
