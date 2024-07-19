import axios, { AxiosInstance, AxiosResponse } from 'axios';

class PokeClient {
    private client: AxiosInstance;

    constructor(baseURL: string = 'https://pokeapi.co/api/v2/') {
        this.client = axios.create({
            baseURL: baseURL,
        });
    }


    public async getPokemon(nameOrId: string | number, offset: number = 0, limit: number = 20): Promise<AxiosResponse> {
        try {
            const response = await this.client.get(`pokemon/${nameOrId}`, {
                params: {
                    offset: offset,
                    limit: limit
                }
            });
            return response;
        } catch (error: any) {
                throw new Error(error.message || 'An unknown error occurred');
            } 
        }

    public async getGeneration(nameOrId: string | number, offset: number = 0, limit: number = 20): Promise<AxiosResponse> {
        try {
            const response = await this.client.get(`generation/${nameOrId}`, {
                params: {
                    offset: offset,
                    limit: limit
                }
            });
            return response;
        } catch (error: any) {
                throw new Error(error.message || 'An unknown error occurred');
            } 
        }

    public async getAllPokemon(offset: number = 0, limit: number = 20): Promise<AxiosResponse> {
        try {
            const response = await this.client.get(`pokemon/`, {
                params: {
                    offset: offset,
                    limit: limit
                }
            });
            return response;
        } catch (error: any) {
                throw new Error(error.message || 'An unknown error occurred');
            } 
        }
}
        

export default PokeClient;
