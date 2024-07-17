import axios, { AxiosInstance, AxiosResponse } from 'axios';
import PokeAPIError from './errors/PokeAPIError';
import isAxiosError from './utils/axiosErrorHandler';

class Client {
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
            console.log(response)
            return response;
        } catch (error: any) {
            if (isAxiosError(error)) {
                throw new PokeAPIError(error.response ? error.response : error.message);
            } else {
                throw new PokeAPIError('An unknown error occurred');
            }
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
            return response.data;
        } catch (error: any) {
            if (isAxiosError(error)) {
                throw new PokeAPIError(error.response ? error.response : error.message);
            } else {
                throw new PokeAPIError('An unknown error occurred');
            }
        }
    }

    public async getPaginatedResults(endpoint: string, offset: number = 0, limit: number = 20): Promise<AxiosResponse> {
        try {
            const response = await this.client.get(endpoint, {
                params: {
                    offset: offset,
                    limit: limit
                }
            });
            return response;
        } catch (error: any) {
            throw new PokeAPIError(error.response ? error.response : error.message);
        }
    }

    public async getPokemonList(offset: number = 0, limit: number = 20): Promise<AxiosResponse> {
        return this.getPaginatedResults('pokemon', offset, limit);
    }
}

export default Client;
