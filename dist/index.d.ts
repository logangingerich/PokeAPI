import { AxiosResponse } from 'axios';
declare class PokeClient {
    private client;
    constructor(baseURL?: string);
    getPokemon(nameOrId: string | number, offset?: number, limit?: number): Promise<AxiosResponse>;
    getGeneration(nameOrId: string | number, offset?: number, limit?: number): Promise<AxiosResponse>;
    getAllPokemon(offset?: number, limit?: number): Promise<AxiosResponse>;
}
export default PokeClient;
