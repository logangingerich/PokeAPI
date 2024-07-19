import PokeClient from '../src/index';

describe('PokeClient', () => {
    const client = new PokeClient();

    it('should fetch a Pokemon by name', async () => {
        const response = await client.getPokemon('snorlax', 0, 10);
        const data = response.data;
        expect(data.name).toBe("snorlax");
    });

    it('should fetch a generation by name', async () => {
        const response = await client.getGeneration('generation-i', 0, 10);
        const data = response.data;
        expect(data.name).toBe('generation-i');
    });
});