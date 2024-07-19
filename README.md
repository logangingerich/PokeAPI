# PokeAPI SDK

A TypeScript SDK to interact with the Pokemon API. This SDK allows developers to easily access data about Pokemon and their various generations!

## Installation

To install the SDK, use:

```bash
npm install github:logangingerich/PokeAPI
```

## Usage

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
client.getAllPokemon(0, 10)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching an Ability by Name or ID



## Methods

The SDK provides the following methods:

- `getPokemon(nameOrId: string | number, offset?: number, limit?: number): Promise<Pokemon>`
- `getGeneration(nameOrId: string | number, offset?: number, limit?: number): Promise<Generation>`
- `getAllPokemon(offset?: number, limit?: number): Promise<PaginatedResponse<Pokemon>>`

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

