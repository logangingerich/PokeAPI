# PokeAPI SDK

A TypeScript SDK to interact with the Pokemon API. This SDK allows developers to easily access data about Pokemon and their various generations!

## Installation

```bash
npm install github:logangingerich/PokeAPI
```

## Usage

### Importing the SDK

```typescript
import PokeClient from 'pokeapi';
```

### Creating an Instance of PokemonClient

```typescript
const client = new PokeClient();
```

### Fetching a Pokemon by Name or ID

```typescript
client.getPokemon('pikachu')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching a Generation by Name or ID

```typescript
client.getGeneration('generation-i')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching a List of Pokemon with Pagination

```typescript
client.getAllPokemon(0, 10)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Methods

- `getPokemon(nameOrId: string | number, offset?: number, limit?: number): Promise<Pokemon>`
- `getGeneration(nameOrId: string | number, offset?: number, limit?: number): Promise<Generation>`
- `getAllPokemon(offset?: number, limit?: number): Promise<PaginatedResponse<Pokemon>>`

## Testing

1. **Build the SDK:**

   ```bash
   npm run build
   ```

2. **Run the Tests:**

   ```bash
   npm test
   ```

## Critical Design Decisions

1. **TypeScript for Type Safety**
   - The SDK is written in TypeScript, which provides type safety and better developer experience with autocompletion and type checking.

2. **Class-Based Structure**
   - The SDK uses a class (`PokeClient`) to encapsulate the API interactions, promoting encapsulation and modularity.

3. **Async/Await for Asynchronous Operations**
   - The SDK leverages `async`/`await` syntax for handling asynchronous operations, making the code more readable and easier to maintain.

4. **Error Handling**
   - Error handling is centralized within the `try/catch` blocks, ensuring that errors are caught and meaningful messages are thrown.

## Tools and Libraries

1. **TypeScript**
   - Provides static typing, interfaces, and advanced type features.

2. **Axios**
   - A promise-based HTTP client for making API requests.

3. **Jest**
   - A testing framework for JavaScript and TypeScript.

4. **npm**
   - Node package manager used for managing dependencies and scripts.
