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

    it('should fetch a list of all Pokemon', async () => {
        const response = await client.getAllPokemon( 0, 10);
        const data = response.data;
        expect(data.count).toBe(1302);
    });
});