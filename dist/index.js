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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class PokeClient {
    constructor(baseURL = 'https://pokeapi.co/api/v2/') {
        this.client = axios_1.default.create({
            baseURL: baseURL,
        });
    }
    getPokemon(nameOrId_1) {
        return __awaiter(this, arguments, void 0, function* (nameOrId, offset = 0, limit = 20) {
            try {
                const response = yield this.client.get(`pokemon/${nameOrId}`, {
                    params: {
                        offset: offset,
                        limit: limit
                    }
                });
                return response;
            }
            catch (error) {
                throw new Error(error.message || 'An unknown error occurred');
            }
        });
    }
    getGeneration(nameOrId_1) {
        return __awaiter(this, arguments, void 0, function* (nameOrId, offset = 0, limit = 20) {
            try {
                const response = yield this.client.get(`generation/${nameOrId}`, {
                    params: {
                        offset: offset,
                        limit: limit
                    }
                });
                return response;
            }
            catch (error) {
                throw new Error(error.message || 'An unknown error occurred');
            }
        });
    }
    getAllPokemon() {
        return __awaiter(this, arguments, void 0, function* (offset = 0, limit = 20) {
            try {
                const response = yield this.client.get(`pokemon/`, {
                    params: {
                        offset: offset,
                        limit: limit
                    }
                });
                return response;
            }
            catch (error) {
                throw new Error(error.message || 'An unknown error occurred');
            }
        });
    }
}
exports.default = PokeClient;
