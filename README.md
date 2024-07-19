# Pokemon SDK

A NodeJS SDK to interact with the Pokemon API. This SDK allows developers to easily access data about Pokemon, abilities, types, and generations using the Pokemon API.

## Installation

To install the SDK, use npm:

```bash
npm instal github:logangingerich/PokeAPI
```

## Usage

Here are some examples of how to use the Pokemon SDK.

### Importing the SDK

First, import the `PokeClient` class from the SDK.

```typescript
import PokeClient from 'pokeapi';
```

### Creating an Instance of PokemonClient

Create an instance of `PokemonClient`.

```typescript
const client = new PokeClient();
```

### Fetching a Pokemon by Name or ID

You can fetch details of a Pokemon by its name or ID.

```typescript
client.getPokemon('pikachu')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching a Generation by Name or ID

You can fetch details of a generation by its name or ID.

```typescript
client.getGeneration('generation-i')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching a List of Pokemon with Pagination

You can fetch a paginated list of Pokemon.

```typescript
client.getPokemonList(0, 10)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching an Ability by Name or ID

You can fetch details of an ability by its name or ID.

```typescript
client.getAbility('1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching a Type by Name or ID

You can fetch details of a type by its name or ID.

```typescript
client.getType('1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Methods

The SDK provides the following methods:

- `getPokemon(nameOrId: string | number, offset?: number, limit?: number): Promise<Pokemon>`
- `getGeneration(nameOrId: string | number, offset?: number, limit?: number): Promise<Generation>`
- `getAbility(nameOrId: string | number): Promise<any>`
- `getType(nameOrId: string | number): Promise<any>`
- `getPokemonList(offset?: number, limit?: number): Promise<PaginatedResponse<Pokemon>>`

## Types

The SDK uses the following types:

```typescript
export interface Pokemon {
    id: number;
    name: string;
    // add other relevant fields
}

export interface Generation {
    id: number;
    name: string;
    // add other relevant fields
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
```

## Testing

To test the SDK, follow these steps:

1. **Build the SDK:**

   ```bash
   npm run build
   ```

2. **Run the Tests:**

   ```bash
   npm test
   ```

### Testing from the Command Line

You can also test the SDK from the command line using a simple script. Create a `testScript.ts` file in the `src` directory with the following content:

```typescript
import PokemonClient from './index';

async function testSDK() {
    const client = new PokemonClient();

    try {
        console.log('Fetching Pokemon: pikachu');
        const pokemon = await client.getPokemon('pikachu');
        console.log(pokemon);

        console.log('Fetching Generation: generation-i');
        const generation = await client.getGeneration('generation-i');
        console.log(generation);

        console.log('Fetching paginated Pokemon list');
        const pokemonList = await client.getPokemonList(0, 10);
        console.log(pokemonList);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

testSDK();
```

Compile and run the script:

```bash
npx tsc src/testScript.ts --outDir dist
node dist/testScript.js
```

