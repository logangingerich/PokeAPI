import Client from './index';

describe('Client', () => {
    const client = new Client();

    it('should fetch a Pokemon by name', async () => {
        const response = await client.getPokemon('snorlax', 0, 10);
        const data = response;
        console.log(data);
        expect(data.weight).toBe(4600);
    });

    it('should fetch a generation by name', async () => {
        const response = await client.getGeneration('generation-i', 0, 10);
        const data = response;
        expect(data.name).toBe('generation-i');
    });
});