const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

const Player = require('../lib/Player');
const { expect } = require('@jest/globals');

test('create a player object', () => {
    const player = new Player('Mathew');

    expect(player.name).toBe('Mathew');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});