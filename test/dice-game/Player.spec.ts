import {describe, expect, test} from "@jest/globals";
import {instance, mock, when} from "ts-mockito";

import {Dice} from "../../src/dice-game/Dice";
import {Player} from "../../src/dice-game/Player";

describe("It will define if a player wins or loses", () => {
    test("Player will win if a dice value is greater than reference", () => {
        // let dice: Dice = new Dice(6);
        let mockedDice: Dice = mock(Dice);
        when(mockedDice.roll()).thenReturn(4);
        let dice: Dice = instance(mockedDice);
        let player: Player = new Player(dice, 3);

        expect(player.play()).toBe(true);
    });

    test("Player will loses if a dice value is equal or lower than reference", () => {
        // let dice: Dice = new Dice(6);
        let mockedDice: Dice = mock(Dice);
        when(mockedDice.roll()).thenReturn(3);
        let dice: Dice = instance(mockedDice);
        let player: Player = new Player(dice, 3);

        expect(player.play()).toBe(false);
    });
});
