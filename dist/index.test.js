"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
describe('PokeClient', () => {
    const client = new index_1.default();
    it('should fetch a Pokemon by name', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getPokemon('snorlax', 0, 10);
        const data = response.data;
        expect(data.name).toBe("snorlax");
    }));
    it('should fetch a generation by name', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getGeneration('generation-i', 0, 10);
        const data = response.data;
        expect(data.name).toBe('generation-i');
    }));
});
