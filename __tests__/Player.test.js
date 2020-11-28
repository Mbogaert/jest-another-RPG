const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

test('create a player object', () => {
    const player = new Player('Mathew');

    expect(player.name).toBe('Mathew');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});