class PokeAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PokeAPIError';
    }
}

export default PokeAPIError;
